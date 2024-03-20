import { UserCard } from "./components/UserCard";

import { useContext, memo } from "react";
import { IUser } from "../../../Main";
import { Context } from "../../../Main";

export const UsersList = memo(() => {
  const { list } = useContext(Context);

  return (
    <section className="flex flex-col gap-4 py-8 w-full items-center">
      {list.length > 0 ? (
        list.map((user: IUser) => {
          if (!user.id) return;
          return <UserCard user={user} key={user.id} />;
        })
      ) : (
        <p>Não existem Usuários Cadastrados.</p>
      )}
    </section>
  );
});
