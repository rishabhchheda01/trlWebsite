// components/EboardMember.jsx
import React from "react";
import LinkedinLogo from "../assets/LinkedinLogo.png";

export default function EboardMember({
  name,
  position,
  image,
  description,
  linkedin,
  imageLeft = true,
}) {
  const rowClass = imageLeft ? "sm:flex-row" : "sm:flex-row-reverse";

  return (
    <article  className={`flex flex-col ${rowClass} items-center gap-6 rounded-xl bg-white/90
    w-full max-w-none mx-0
    px-8 py-10 sm:px-12 sm:py-12
    shadow-lg hover:shadow-2xl transition-shadow duration-200`}
        >
      <div
        className="w-32 h-32 sm:w-36 sm:h-36 flex-shrink-0 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center"
        aria-hidden={image ? "false" : "true"}
      >
        {image ? (
          <img
            src={image}
            alt={`Portrait of ${name}`}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          <span className="text-2xl font-geist text-gray-600" aria-hidden="false">
            {name?.[0] ?? ""}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="text-left flex-1 px-1 sm:px-3">
        <h3 className="text-xl font-geist text-slate-900">{name}</h3>

        <p className="text-sm text-slate-700 mt-1 flex items-center gap-2">
          <span>{position}</span>
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
              aria-label={`${name} on LinkedIn (opens in a new tab)`}
            >
              <img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5 ml-2 inline-block" />
            </a>
          ) : null}
        </p>

        {description ? (
          <p className="text-slate-800 mt-3 leading-relaxed">{description}</p>
        ) : null}
      </div>
    </article>
  );
}
