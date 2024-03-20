export class API {
  baseUrl: string;

  constructor() {
    this.baseUrl = "https://react-users.onrender.com";
  }

  async get() {
    const response = await fetch(this.baseUrl.concat("/users")).catch(
      (error) => {
        throw new Error(error);
      }
    );

    const data = await response.json();
    return data;
  }

  async post(user: object) {
    const response = await fetch(this.baseUrl.concat("/user"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).catch((error) => {
      throw new Error(error);
    });

    const data = await response.json();
    return data;
  }

  async delete(id: string) {
    const response = await fetch(this.baseUrl.concat("/user?id=" + id), {
      method: "DELETE",
    }).catch((error) => {
      throw new Error(error);
    });

    const data = await response.json();
    return data;
  }
}
