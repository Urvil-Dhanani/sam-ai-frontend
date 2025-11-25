// import { useState, useRef } from 'react';
// import { Upload, Mail } from 'lucide-react';
// import Header from './Header';

// interface UploadPageProps {
//   onGenerate: (jsonData: unknown) => void;
//   isGenerating: boolean;
// }

// export default function UploadPage({ onGenerate, isGenerating }: UploadPageProps) {
//   const [file, setFile] = useState<File | null>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(false);

//     const droppedFile = e.dataTransfer.files[0];
//     if (droppedFile && droppedFile.type === 'application/json') {
//       setFile(droppedFile);
//     }
//   };

//   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile && selectedFile.type === 'application/json') {
//       setFile(selectedFile);
//     }
//   };

//   const handleGenerate = async () => {
//     if (!file) return;

//     try {
//       const text = await file.text();
//       const jsonData = JSON.parse(text);
//       onGenerate(jsonData);
//     } catch (error) {
//       console.error('Error parsing JSON:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <Header />

//       <main className="max-w-4xl mx-auto px-6 py-16">
//         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
//               <Mail className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-4xl font-bold text-slate-900 mb-4">
//               AI-Powered Email Sequence Generator
//             </h1>
//             <p className="text-lg text-slate-600">
//               Upload a JSON file and instantly generate 4 beautifully written emails
//             </p>
//           </div>

//           <div
//             className={`border-2 border-dashed rounded-xl p-16 text-center transition-all ${
//               isDragging
//                 ? 'border-blue-500 bg-blue-50'
//                 : 'border-slate-300 bg-slate-50'
//             }`}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//           >
//             <Upload className={`w-12 h-12 mx-auto mb-4 ${
//               isDragging ? 'text-blue-600' : 'text-slate-400'
//             }`} />

//             <p className="text-lg font-medium text-slate-700 mb-2">
//               {file ? file.name : 'Drag & drop JSON file here or click to upload'}
//             </p>

//             <p className="text-sm text-slate-500 mb-6">
//               Only JSON files accepted
//             </p>

//             <input
//               ref={fileInputRef}
//               type="file"
//               accept=".json"
//               onChange={handleFileSelect}
//               className="hidden"
//             />

//             {!file && (
//               <button
//                 onClick={() => fileInputRef.current?.click()}
//                 className="px-6 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
//               >
//                 Browse Files
//               </button>
//             )}

//             {file && (
//               <button
//                 onClick={() => {
//                   setFile(null);
//                   if (fileInputRef.current) fileInputRef.current.value = '';
//                 }}
//                 className="px-6 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
//               >
//                 Remove File
//               </button>
//             )}
//           </div>

//           <button
//             onClick={handleGenerate}
//             disabled={!file || isGenerating}
//             className={`w-full mt-8 py-4 rounded-xl font-semibold text-lg transition-all ${
//               !file || isGenerating
//                 ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
//                 : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
//             }`}
//           >
//             {isGenerating ? 'Generating Email Sequence...' : 'Generate Email Sequence'}
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

import { useState, useRef } from 'react';
import { Upload, Mail } from 'lucide-react';
import Header from './Header';

interface UploadPageProps {
  onGenerate: (file: File) => void; // send file to parent instead of sequence
  isGenerating: boolean;
}

export default function UploadPage({ onGenerate, isGenerating }: UploadPageProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/json') {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/json') {
      setFile(selectedFile);
    }
  };

  const handleGenerate = () => {
    if (!file) return;
    onGenerate(file); // send file to App.tsx
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px6 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              SAM - AI - DEMO
            </h1>
            <p className="text-lg text-slate-600">
              Upload a persona in a JSON format
            </p>
          </div>

          <div
            className={`border-2 border-dashed rounded-xl p-16 text-center transition-all ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : 'border-slate-300 bg-slate-50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload
              className={`w-12 h-12 mx-auto mb-4 ${
                isDragging ? 'text-blue-600' : 'text-slate-400'
              }`}
            />

            <p className="text-lg font-medium text-slate-700 mb-2">
              {file ? file.name : 'Drag & drop JSON file here or click to upload'}
            </p>

            <p className="text-sm text-slate-500 mb-6">
              Only JSON files accepted
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileSelect}
              className="hidden"
            />

            {!file && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Browse Files
              </button>
            )}

            {file && (
              <button
                onClick={() => {
                  setFile(null);
                  if (fileInputRef.current) fileInputRef.current.value = '';
                }}
                className="px-6 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Remove File
              </button>
            )}
          </div>

          <button
            onClick={handleGenerate}
            disabled={!file || isGenerating}
            className={`w-full mt-8 py-4 rounded-xl font-semibold text-lg transition-all ${
              !file || isGenerating
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
            }`}
          >
            {isGenerating ? 'Generating Email Sequence...' : 'Generate Email Sequence'}
          </button>
        </div>
      </main>
    </div>
  );
}
