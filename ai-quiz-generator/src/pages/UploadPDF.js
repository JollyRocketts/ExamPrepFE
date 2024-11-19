import React, { useState } from "react";

function UploadPDF() {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  const handlePDFUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPDF(file.name);
    }
  };

  return (
    <>
      <div className="relative  bg-orange-400 flex flex-col justify-center items-center text-white text-center pt-24 pb-56 m-5 rounded-xl">
        <div className="w-[60%] flex flex-col justify-center items-center space-y-6">
          <h2 className="text-2xl font-bold">Upload a PDF</h2>
          {selectedPDF && (
            <p className="mt-4 bg-white text-red-400 p-2 rounded shadow">
              {selectedPDF}
            </p>
          )}
          <label
            htmlFor="pdfInput"
            className="cursor-pointer bg-white text-orange-400 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Choose PDF
          </label>
          <input
            id="pdfInput"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handlePDFUpload}
          />
        </div>
        <div className="w-[60%] flex justify-center items-start space-y-6 text-white">
          <div className="w-full flex flex-col items-center justify-start py-6">
            <div>
              <p className="text-lg font-semibold">Choose Summary Type:</p>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="summaryType"
                  value="abstractive"
                  checked={selectedOption2 === "abstractive"}
                  onChange={(e) => setSelectedOption2(e.target.value)}
                  className="cursor-pointer"
                />
                <span>Abstractive</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="summaryType"
                  value="extractive"
                  checked={selectedOption2 === "extractive"}
                  onChange={(e) => setSelectedOption2(e.target.value)}
                  className="cursor-pointer"
                />
                <span>Extractive</span>
              </label>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-start">
            <div>
              <p className="text-lg font-semibold">Choose Summary Length:</p>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="summaryLength"
                  value="short"
                  checked={selectedOption3 === "short"}
                  onChange={(e) => setSelectedOption3(e.target.value)}
                  className="cursor-pointer"
                />
                <span>Short</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="summaryLength"
                  value="medium"
                  checked={selectedOption3 === "medium"}
                  onChange={(e) => setSelectedOption3(e.target.value)}
                  className="cursor-pointer"
                />
                <span>Medium</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="summaryLength"
                  value="long"
                  checked={selectedOption3 === "long"}
                  onChange={(e) => setSelectedOption3(e.target.value)}
                  className="cursor-pointer"
                />
                <span>Long</span>
              </label>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 w-1/3 mt-16 bg-white shadow-lg rounded-xl p-6 flex flex-col justify-center items-center">
          <div className="flex flex-row justify-around flex-wrap gap-8">
            <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500">
              Summarize
            </button>
            <button className="bg-orange-400 text-white px-8 py-2 rounded-md hover:bg-orange-500">
              Generate Quiz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadPDF;
