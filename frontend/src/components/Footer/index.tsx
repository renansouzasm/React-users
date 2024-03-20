import { GithubLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="px-6 py-8 flex justify-center">
      <div className="text-white maxWidth block w-full text-sm">
        <p className="mb-2">Todos os direitos reservados © 2024</p>
        <a
          className="flex"
          href="http://github.com/renansouzasm"
          target="_blank"
        >
          <GithubLogo /> GitHub
        </a>
      </div>
    </footer>
  );
}
