<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full lg:mb-6 mb-6">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            Dashboard
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p class="lg:w-full w-full leading-relaxed text-base">
          Vous pouvez voir dans cette section la liste des transactions avec
          leur montant respectif
        </p>
      </div>
      <div>
        <form v-on:submit.prevent="addTransaction()" class="w-full max-w-lg">
          <div class="flex flex-wrap mb-6">
            <div class="w-full md:w-1/2 mb-3 pr-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Description
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Description"
                v-model="newTransaction.description"
              />
              <!-- <p class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p> -->
            </div>
            <div class="w-full md:w-1/2 mb-3 pl-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Montant
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="Amount"
                step="0.01"
                v-model="newTransaction.amount"
              />
            </div>
            <div class="w-full md:w-1/2 mb-3 pr-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Currency
              </label>
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                v-model="newTransaction.currency"
              >
                <option disabled selected value=""
                  >----Select Currency----</option
                >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="MGA">MGA</option>
              </select>
            </div>
            <div class="w-full md:w-1/2 mb-3 pl-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Status
              </label>
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                v-model="newTransaction.status"
              >
                <option disabled selected value=""
                  >----Select Status----</option
                >
                <option value="PENDING">PENDING</option>
                <option value="CANCELED">CANCELED</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>
            </div>
            <div class="w-full mb-3">
              <button
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </form>
        <table class="table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left">Date</th>
              <th class="px-4 py-2 text-left">Description</th>
              <th class="px-4 py-2 text-center">Montant</th>
              <th class="px-4 py-2 text-left">Currency</th>
              <th class="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="transaction in transactions">
              <tr v-bind:key="transaction.id">
                <td class="border px-4 py-2">{{ transaction.date }}</td>
                <td class="border px-4 py-2">{{ transaction.description }}</td>
                <td class="border px-4 py-2 text-right">
                  {{ transaction.amount }}
                </td>
                <td class="border px-4 py-2 text-center">
                  {{ transaction.currency }}
                </td>
                <td class="border px-4 py-2 text-center">
                  {{ transaction.status }}
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import ADD_TRANSACTION from "@/graphql/AddTransaction.gql";
import GET_TRANSACTION from "@/graphql/GetTransaction.gql";

export default {
  name: "Dashboard",
  data() {
    return {
      transactions: [],
      newTransaction: {
        description: "",
        amount: 0,
        currency: "",
        status: ""
      }
    };
  },
  methods: {
    async addTransaction() {
      await this.$apollo.mutate({
        mutation: ADD_TRANSACTION,
        variables: {
          ...this.newTransaction,
          amount: parseFloat(this.newTransaction.amount)
        },
        refetchQueries: () => [{ query: GET_TRANSACTION }]
      });
    }
  },
  apollo: {
    transactions: GET_TRANSACTION
  }
};
</script>
