const baseUrl = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";

const getContacts = async () => await fetch(baseUrl, { method: "get" });

export { getContacts };
