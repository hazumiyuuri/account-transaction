import { v4 as uuid } from 'uuid';

let transactions = [];

const resolvers = {
    Query: {
        transactions: () => transactions,
        transaction: (parent, args) => transactions.find(transaction => parseInt(transaction.id) === parseInt(args.id))
    },

    Mutation: {
        createTransaction: (parent, args) => {
            const id = uuid();
            const checkId = transactions.findIndex(transaction => transaction.id === id);
            const { description, amount, currency, status} = args;

            if (checkId === -1) {
                const newTransaction = {
                    id,
                    date: new Date().toISOString(),
                    description,
                    amount,
                    currency,
                    status
                };

                transactions = [
                    ...transactions,
                    newTransaction
                ];

                return newTransaction;
            }

            throw new Error("Transaction creating error");
        }
    }
}

export default resolvers;