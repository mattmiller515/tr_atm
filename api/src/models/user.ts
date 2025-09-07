type User = {
  id: string;
  firstName: string;
  lastName: string;
};

const user1 = {
  id: "1234",
  firstName: "John",
  lastName: "Doe",
};

const user2 = {
  id: "5678",
  firstName: "Jane",
  lastName: "Smith",
};

const user3 = {
  id: "9101",
  firstName: "Alice",
  lastName: "Johnson",
};

const user4 = {
  id: "1121",
  firstName: "Bob",
  lastName: "Brown",
};

const user5 = {
  id: "3141",
  firstName: "Charlie",
  lastName: "Davis",
};

export const userDB: User[] = [user1, user2, user3, user4, user5];
