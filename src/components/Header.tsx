import { Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-xl">
              <Mail className="w-6 h-6 text-white" />
            </div> */}
            <img
              src="/bluewhaleapps_blue_2024.png"   
              alt="Logo"
              className="h-10 object-contain"
            />
          </div>

          <div>
            
          </div>


        </div>
      </div>
    </header>
  );
}
