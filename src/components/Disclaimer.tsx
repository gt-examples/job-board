import { T } from "gt-next";

export default function Disclaimer() {
  return (
    <div className="bg-blue-950 border-b border-blue-800">
      <div className="max-w-4xl mx-auto px-6 py-3">
        <T>
          <p className="text-xs text-blue-300 text-center">
            This is an example application built with General Translation to
            demonstrate internationalization. These are not real job listings.
          </p>
        </T>
      </div>
    </div>
  );
}
