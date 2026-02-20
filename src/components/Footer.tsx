import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-16">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <T>
          <p className="text-xs text-neutral-600 text-center">
            Built with General Translation to demonstrate locale-aware
            formatting of currencies, dates, and plurals.
          </p>
        </T>
      </div>
    </footer>
  );
}
