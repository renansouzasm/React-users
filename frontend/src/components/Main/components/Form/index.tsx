import { useContext, useRef, FormEvent } from "react";
import { Context, IUser } from "../../../Main";
import { API } from "../../../../services/api";

export function Form() {
  const api = new API();

  const { list, setList, handleGet } = useContext(Context);

  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  async function handlePost(e: FormEvent) {
    e.preventDefault();

    if (!fullNameRef.current || !emailRef.current) return;
    if (list.length >= 20) return;

    const newUser: IUser = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      status: true,
    };
    setList((prevList) => [...prevList, newUser]);

    fullNameRef.current.value = "";
    emailRef.current.value = "";

    await api.post(newUser);
    handleGet();
  }

  return (
    <form
      onSubmit={handlePost}
      className="py-8 w-full flex flex-col items-center"
    >
      <div className="maxWidth block mb-4 w-full">
        <label className="text-white" htmlFor="userName">
          Nome de Usuário
        </label>
        <input
          className="bg-bg-color2 mt-1 p-4 rounded-md w-full"
          type="text"
          id="userName"
          placeholder="Nome de Usuário"
          required
          ref={fullNameRef}
        />
      </div>

      <div className="maxWidth block mb-4 w-full">
        <label className="text-white" htmlFor="userEmail">
          Email
        </label>
        <input
          className="bg-bg-color2 mt-1 p-4 rounded-md w-full"
          type="email"
          id="userEmail"
          placeholder="Email"
          required
          ref={emailRef}
        />
      </div>

      <button className="text-white bg-bg-color2 maxWidth p-4 w-full uppercase font-bold rounded-md">
        Cadastrar
      </button>
    </form>
  );
}
