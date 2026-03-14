"use client";

import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  placeholder: string;
  type?: string;
  textarea?: boolean;
}

const ContactInput = ({ icon, placeholder, type = "text", textarea }: Props) => {
  return (
    <div className="relative group">

      <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-emerald-400 transition-colors">
        {icon}
      </div>

      {textarea ? (
        <textarea
          rows={5}
          placeholder={placeholder}
          className="
          w-full pl-12 pr-4 py-3 rounded-lg
          bg-slate-800/70 border border-slate-700
          focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30
          outline-none transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="
          w-full pl-12 pr-4 py-3 rounded-lg
          bg-slate-800/70 border border-slate-700
          focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30
          outline-none transition-all"
        />
      )}

    </div>
  );
};

export default ContactInput;