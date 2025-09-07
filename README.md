# TR_ATM

A ATM with a React + Vite frontend and Express backend, using memory for storage. Users can log in using PINs, check their balance, deposit, and withdraw funds through an ATM UI.

## Project Structure

```
├── web/ # React + Vite frontend
├── api/ # Express API backend
├── shared/ # Shared TypeScript types
└── README.md # This documentation
```

## Prerequisites

- **Node.js v20.19 or above**

## Setup & Local Development

1. Start backend

   ```
   $ cd api
   $ npm install
   $ npm run start
   ```

2. Start frontend

   ```
   $ cd web
   $ npm install
   $ npm run start
   ```

## Testable user data

### User 1

```
Name: John Doe
PIN: 1111
Card Type: Star
Balance: $10.00
```

### User 2

```
Name: Jane Smith
PIN: 2222
Card Type: Pulse
Balance: $53.21
```

### User 3

```
Name: Alice Johnson
PIN: 3333
Card Type: MasterCard
Balance: $0.00
```

### User 4

```
Name: Bob Brown
PIN: 4444
Card Type: Plus
Balance: $9,999.99
```

### User 5

```
Name: Charlie Davis
PIN: 5555
Card Type: Visa
Balance: $0.01
```
