import { TrashSimple } from "@phosphor-icons/react";
import { useContext, memo } from "react";

import { IUser, Context } from "../../../../../Main";
import { API } from "../../../../../../services/api";

export const UserCard = memo(({ user }: { user: IUser }) => {
  const api = new API();
  const { setList } = useContext(Context);

  async function handleDelete() {
    if (!user.id) return;

    await api.delete(user.id);
    setList((prevState) => prevState.filter((item) => item.id !== user.id));
  }

  return (
    <article className="bg-bg-color2 maxWidth userCardMd w-full rounded-md p-4 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="profileImgStyle">
          <img
            className="w-full h-full object-cover"
            loading="lazy"
            src={`https://source.unsplash.com/random?a=${Math.random()}`}
            alt="perfil image"
          />
        </div>

        <div className="userDetails overflow-x-scroll md:overflow-hidden">
          <strong className="text-white">
            {user.fullName ?? "Nome do Usuário"}
          </strong>
          <p>{user.email ?? "user@email.com"}</p>
        </div>
      </div>

      <button
        onClick={handleDelete}
        className="hover:bg-bg-color1 hover:text-white btnStyle"
      >
        <TrashSimple className="w-full h-full" />
      </button>
    </article>
  );
});
