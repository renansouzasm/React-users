import { Form } from "./components/Form";
import { UsersList } from "./components/UsersList";

import { API } from "../../services/api";
import { createContext, useState, useEffect } from "react";

export interface IUser {
  id?: string;
  fullName: string;
  email: string;
  status: boolean;
}

interface IContext {
  list: IUser[];
  setList: React.Dispatch<React.SetStateAction<IUser[]>>;
  handleGet: () => Promise<void>;
}

export const Context = createContext<IContext>({
  list: [],
  setList: () => {},
  handleGet: async () => {},
});

export function Main() {
  const api = new API();

  const [list, setList] = useState<IUser[]>([]);

  async function handleGet() {
    const response = await api.get();
    setList(response);
  }

  useEffect(() => {
    handleGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Context.Provider value={{ list, setList, handleGet }}>
      <main className="px-6 block">
        <Form />
        <UsersList />
      </main>
    </Context.Provider>
  );
}
