// import { useState } from 'react';
// import UploadPage from './components/UploadPage';
// import EmailSequenceDisplay from './components/EmailSequenceDisplay';
// import { EmailSequence } from './types';

// function App() {
//   const [emailSequence, setEmailSequence] = useState<EmailSequence | null>(null);
//   const [isGenerating, setIsGenerating] = useState(false);

//   const handleGenerateSequence = async (jsonData: unknown) => {
//     setIsGenerating(true);

//     try {
//       await new Promise(resolve => setTimeout(resolve, 2000));

//       const mockSequence: EmailSequence = {
//         emails: [
//           {
//             emailNumber: 1,
//             subject: "Welcome to Your Journey with Us",
//             body: `Hi there,

// We're thrilled to have you onboard! This is the beginning of something exciting. Over the next few days, we'll be sharing valuable insights and tips to help you get the most out of your experience.

// While we'd love to make this super-involved, we want to introduce you to the core features first and transform the way you work. Our AI-powered tools are designed to save you time and boost your productivity.

// Stay tuned for more!

// Best regards,
// The Team`
//           },
//           {
//             emailNumber: 2,
//             subject: "Getting Started: Your First Steps",
//             body: `Hi again,

// Now that you've had a chance to explore, let's help you take the first steps into the features that matter most. In this email, we'll walk you through the essential tools to get you up and running quickly.

// Our system is built with user-friendly features to make setup as seamless as possible. Whether you're a beginner or an expert, we've got resources to support you every step of the way.

// Let's get started!

// Cheers,
// The Team`
//           },
//           {
//             emailNumber: 3,
//             subject: "Pro Tips to Maximize Your Results",
//             body: `By now, you're getting familiar with the features. Today, we want to share some pro tips that can help you take full advantage of all we offer.

// From advanced automation to smart integrations, these tips have been tried and tested by our most successful users. We've also included some industry best practices from customers who achieved incredible results.

// Ready to level up?

// Your success,
// The Team`
//           },
//           {
//             emailNumber: 4,
//             subject: "We're Here to Support Your Success",
//             body: `Hi there,

// As we come to the end of this sequence, we want to reiterate that we're here to answer any questions or provide any support you might need. Our goal is to ensure your continued success.

// We're excited to empower you with everything you're learning and we can't wait to see what you'll accomplish. Please feel free to reach out any time — we're just an email away.

// Thank you for choosing us and we look forward to being part of your journey!

// Warm regards,
// The Team`
//           }
//         ]
//       };

//       setEmailSequence(mockSequence);
//     } catch (error) {
//       console.error('Error generating sequence:', error);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleUploadNew = () => {
//     setEmailSequence(null);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       {!emailSequence ? (
//         <UploadPage
//           onGenerate={handleGenerateSequence}
//           isGenerating={isGenerating}
//         />
//       ) : (
//         <EmailSequenceDisplay
//           sequence={emailSequence}
//           onUploadNew={handleUploadNew}
//         />
//       )}
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import UploadPage from './components/UploadPage';
import EmailSequenceDisplay from './components/EmailSequenceDisplay';
import { EmailSequence } from './types';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [emailSequence, setEmailSequence] = useState<EmailSequence | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateSequence = async (file: File) => {
    setIsGenerating(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${BASE_URL}/email-sequence/generate`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (!result?.success || !result?.data?.sequence) {
        alert("Something went wrong — API returned invalid response");
        return;
      }

      // Convert API result → internal UI format
      const formattedSequence: EmailSequence = {
        emails: result.data.sequence.map((email: any) => ({
          emailNumber: email.email_number,
          subject: email.subject,
          body: email.body,
        }))
      };

      setEmailSequence(formattedSequence);
    } catch (error) {
      console.error("Error generating sequence:", error);
      alert("Failed to generate email sequence");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUploadNew = () => {
    setEmailSequence(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {!emailSequence ? (
        <UploadPage
          onGenerate={handleGenerateSequence}
          isGenerating={isGenerating}
        />
      ) : (
        <EmailSequenceDisplay
          sequence={emailSequence.emails}
          onBack={handleUploadNew}
        />
      )}
    </div>
  );
}

export default App;
