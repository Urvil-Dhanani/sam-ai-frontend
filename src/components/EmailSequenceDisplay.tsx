import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import EmailCard from "./EmailCard";

interface EmailSequenceDisplayProps {
  sequence: any[];
  onBack: () => void;
}

export default function EmailSequenceDisplay({ sequence, onBack }: EmailSequenceDisplayProps) {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-8">
        <button onClick={onBack} className="text-blue-600 font-medium mb-6">
        ← Upload New File
     </button>

        <div className="space-y-6">
          {/* {sequence.emails.map((email) => (
            <EmailCard key={email.emailNumber} email={email} />
          ))} */}
          {sequence.map((email) => (
            <div key={email.email_number} className="bg-white rounded-xl shadow border mb-8 p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Email {email.email_number}</h2>

              <p className="text-sm text-gray-600 mb-1 font-semibold">Subject</p>
              <p className="text-xl font-bold mb-6">{email.subject}</p>

              <p className="text-sm text-gray-600 mb-1 font-semibold">Message</p>
              <p className="whitespace-pre-line text-gray-800 leading-7">{email.body}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// import { EmailSequence } from '../types';
// import EmailCard from './EmailCard';
// import Header from './Header';
// import { ArrowLeft } from 'lucide-react';


// interface EmailSequenceDisplayProps {
//   sequence: any[];
//   onBack: () => void;
// }

// export default function EmailSequenceDisplay({ sequence, onBack }: EmailSequenceDisplayProps) {
//   return (
//     <div>
//       <button onClick={onBack} className="text-blue-600 font-medium mb-6">
//         ← Upload New File
//       </button>

//       {sequence.map((email) => (
//         <div key={email.email_number} className="bg-white rounded-xl shadow border mb-8 p-8">
//           <h2 className="text-2xl font-bold mb-4 text-blue-600">Email {email.email_number}</h2>

//           <p className="text-sm text-gray-600 mb-1 font-semibold">Subject</p>
//           <p className="text-xl font-bold mb-6">{email.subject}</p>

//           <p className="text-sm text-gray-600 mb-1 font-semibold">Message</p>
//           <p className="whitespace-pre-line text-gray-800 leading-7">{email.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
