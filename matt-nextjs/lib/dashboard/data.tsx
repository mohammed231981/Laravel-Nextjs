export const fetchUsers = async (q: string | RegExp) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
   
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id: string) => {
  console.log(id);
  try {
   
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};


export const fetchData = async (id : string) => {
  try {
   
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch data!");
  }
};

export const cards = [
  {
    id: 1,
    title: "Reiskosten",
    amount: 10.92,
    status: 0,
    eenheid :'km/euro',
    url :'/reiskosten'
  },
  {
    id: 2,
    title: "Verlof",
    amount: 8.23,
    status: 1,
    eenheid :'uur',
    url :'/verlof/verlofkaart'
  },
  {
    id: 3,
    title: "Weekinvoer(45)",
    amount: 40,
    status: 1,
    eenheid :'uur',
    url :'/projecten-weekinvoer'
  },
];

export const posts = [
    {
      id: 1,
      title: "Personeelsbijeenkomst en etentje op 10 maart ",
      description :"Safe the date! Op donderdag 10 maart, van 16.00 - 17.00 uur, vindt onze volgende personeelsbijeenkomst plaats. We zijn heel blij dat we allemaal weer fysiek bij elkaar mogen kom...",
      url :'/berichten/1'
    },
    {
      id: 2,
      title: "Personeelsbijeenkomst en etentje op 10 maart ",
      description: "Een heugelijk feitje! Afgelopen zaterdag is Sandra bevallen van een prachtige zoon. Hij heet Sem! Moeder en zoon (en de nieuwbakken vader) maken het goed. Uiteraard gaan we een ...",
      url :'/berichten/2'
    },
  ];