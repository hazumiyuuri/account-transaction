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
      <!-- <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/720x400"
              alt="content"
            />
            <h3
              class="tracking-widest text-indigo-500 text-xs font-medium title-font"
            >
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Chichen Itza
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/721x401"
              alt="content"
            />
            <h3
              class="tracking-widest text-indigo-500 text-xs font-medium title-font"
            >
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Colosseum Roma
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/722x402"
              alt="content"
            />
            <h3
              class="tracking-widest text-indigo-500 text-xs font-medium title-font"
            >
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Great Pyramid of Giza
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/723x403"
              alt="content"
            />
            <h3
              class="tracking-widest text-indigo-500 text-xs font-medium title-font"
            >
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              San Francisco
            </h2>
            <p class="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      transactions: [
        {
          id: 1,
          date: "13/09/2018",
          description: "LIGNE WEB SERVIC",
          amount: -0.99,
          currency: "EUR",
          status: "Completed"
        },
        {
          id: 2,
          date: "30/08/2018",
          description: "DNH*GODADDY.COM",
          amount: -1.04,
          currency: "EUR",
          status: "Completed"
        },
        {
          id: 3,
          date: "26/02/2018",
          description: "BNI GAB 67 CAE ANKORON - ATM",
          amount: -48.47,
          currency: "EUR",
          status: "Completed"
        },
        {
          id: 4,
          date: "14/02/2018",
          description: "BNI GAB 2 ANTSAKAVIRO - ATM",
          amount: -108.82,
          currency: "EUR",
          status: "Completed"
        },
        {
          id: 5,
          date: "14/02/2018",
          description: "BNI GAB 2 ANTSAKAVIRO - ATM",
          amount: -108.82,
          currency: "EUR",
          status: "Completed"
        },
        {
          id: 6,
          date: "14/02/2018",
          description: "BNI GAB 2 ANTSAKAVIRO - ATM",
          amount: -108.82,
          currency: "EUR",
          status: "Completed"
        },
        {
          id: 7,
          date: "14/02/2018",
          description: "BNI GAB 2 ANTSAKAVIRO - ATM",
          amount: -108.82,
          currency: "EUR",
          status: "Completed"
        },
        {
          id: 8,
          date: "14/02/2018",
          description: "BNI GAB 2 ANTSAKAVIRO - ATM",
          amount: -108.82,
          currency: "EUR",
          status: "Completed"
        },
        {
          id: 9,
          date: "14/02/2018",
          description: "BNI GAB 2 ANTSAKAVIRO - ATM",
          amount: -108.82,
          currency: "EUR",
          status: "Completed"
        },
        {
          id: 10,
          date: "13/02/2018",
          description: "BNI GAB 28 ANTSAKAVIRO",
          amount: -0.8,
          currency: "EUR",
          status: "Canceled"
        },
        {
          id: 11,
          date: "13/02/2018",
          description: "BNI GAB 2 ANTSAKAVIRO",
          amount: -0.8,
          currency: "EUR",
          status: "Canceled"
        },
        {
          id: 12,
          date: "13/02/2018",
          description: "BNI GAB 2 ANTSAKAVIRO",
          amount: -0.8,
          currency: "EUR",
          status: "Canceled"
        },
        {
          id: 13,
          date: "13/02/2018",
          description: "OJA - XX-807131  (Wirecard)",
          amount: 705,
          currency: "EUR",
          status: "Completed"
        },
        {
          id: 14,
          date: "01/01/2018",
          description: "BNI GAB 60 67 HA NORD - ATM",
          amount: -7.85,
          currency: "EUR",
          status: "Completed"
        }
      ]
    };
  }
};
</script>
