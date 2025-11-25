import { Email } from '../types';
import { Mail } from 'lucide-react';

interface EmailCardProps {
  email: Email;
}

export default function EmailCard({ email }: EmailCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg">
            Email {email.emailNumber}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <div className="text-sm font-medium text-slate-500 mb-2">Subject</div>
          <div className="text-xl font-semibold text-slate-900">
            {email.subject}
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-slate-500 mb-3">Message</div>
          <div className="prose prose-slate max-w-none">
            <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
              {email.body}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
