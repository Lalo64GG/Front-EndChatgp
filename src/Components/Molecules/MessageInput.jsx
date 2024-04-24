import React, { useState, useRef } from 'react';
import { HiOutlinePaperAirplane, HiOutlineDocument } from 'react-icons/hi';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const MessageInput = ({ setMessages }) => {
 
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); 
  const [inputValue, setInputValue] = useState('');


  const handleSelectDocument = () => {
    // Simular clic en el input de tipo file cuando se hace clic en el icono del documento
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log("Documento seleccionado:", selectedFile);
    extractTextFromPDF(selectedFile)
  };


  const extractTextFromPDF = async (file) => {
    if (!file) {
      console.error('No se ha seleccionado ningún archivo PDF.');
      return;
    }

    try {
      const reader = new FileReader();
      reader.onload = async function (event) {
        const typedArray = new Uint8Array(event.target.result);
        const pdf = await pdfjs.getDocument(typedArray).promise;

        let text = '';
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const pageText = await page.getTextContent();
          pageText.items.forEach((item) => {
            text += item.str + ' ';
          });
        }

        // Enviar el texto extraído del PDF al servidor
        filUpdate(text);
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error al extraer texto del PDF:', error);
    }
  };

  const filUpdate = async(text) => {
    console.log(text);
    try {
      const response = await fetch("http://localhost:3000/updatePdfPrompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text})
      })
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  } 

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage = { body: inputValue, from: 'Me' };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    sendDataToServer(inputValue);; // Enviar el mensaje de texto directamente
    setInputValue('');
  };

  const sendDataToServer = async (prompt)  => {
    const url = 'http://localhost:3000/chat';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      const responseData = await response.json();
      console.log(responseData);

      const newMessage = { body: responseData.message.content}; // Utilizar responseData.content en lugar de responseData.message.content
      setMessages(prevMessages => [...prevMessages, newMessage]);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };


  return (
    <div className="py-2 flex flex-col items-end border border-gray-300 w-full bg-sky-400">
      <input
        type="file"
        accept='.pdf'
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <div className="flex items-center w-full">
        <HiOutlineDocument
          className="text-sky-600 cursor-pointer hover:text-sky-800 mx-2"
          size={24}
          onClick={handleSelectDocument}
        />
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          className="flex-grow px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <HiOutlinePaperAirplane
          className="text-sky-600 cursor-pointer hover:text-sky-800 mx-2"
          size={24}
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
};
