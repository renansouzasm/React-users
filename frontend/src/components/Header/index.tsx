import { Notches } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="px-6 py-4 flex justify-center">
      <div className="maxWidth flex w-full justify-between">
        <button className="btnStyle hover:text-white hover:bg-bg-color2">
          <Notches className="w-full h-full" />
        </button>

        <div className="profileImgStyle">
          <img
            className="w-full h-full object-cover"
            loading="lazy"
            src={`https://source.unsplash.com/random?a=${Math.random()}`}
            alt="perfil image"
          />
        </div>
      </div>
    </header>
  );
}
