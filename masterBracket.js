const bracketMaster = {
  round1: [
    {
      id: 1,
      name: "Match 1",
      nextMatchId: 9,
      tournamentRoundText: "1",
      participants: [
        {
          id: "japaneseWagyuFilet1",
          seed: 1,
          isWinner: true,
          name: "Japanese Wagyu Filet",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165117309205",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2286.png?v=1704221585",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
        {
          id: "usdaPrimeDenver",
          seed: 16,
          isWinner: false,
          name: "USDA Prime Denver",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165121503509",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2447_2d98c3d8-db58-4ce0-8c4b-5bb303e2db99.png?v=1704221678",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
      ],
    },
    {
      id: 8,
      name: "Match 8",
      nextMatchId: 9,
      tournamentRoundText: "1",
      participants: [
        {
          id: "australianWagyuSkirt8",
          seed: 8,
          isWinner: true,
          name: "Australian Wagyu Skirt Steak",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165112459541",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2304.png?v=1704221515",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
        {
          id: "japaneseWagyuChuck9",
          seed: 9,
          isWinner: false,
          name: "Japanese Wagyu Chuck Steak",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53181899342101",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2742_4be03eb5-5fa1-4da7-bd76-07ebfdefc97d.png?v=1704413806",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
      ],
    },
    {
      id: 5,
      name: "Match 5",
      nextMatchId: 10,
      tournamentRoundText: "1",
      participants: [
        {
          id: "usdaPrimePicanha5", // Unique identifier of any kind
          seed: 5,
          isWinner: true,
          name: "USDA Prime Picanha",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53181896982805",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2316_0fbf8aa5-c6ac-42fb-b298-a2264eed8922.png?v=1704413774",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
        {
          id: "australianWagyuTriTip12",
          seed: 12,
          isWinner: false,
          name: "Australian Wagyu Tri Tip",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165114229013",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2429.png?v=1704221530",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
      ],
    },
    {
      id: 4,
      name: "Match 4",
      nextMatchId: 10, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "1", // Text for Round Header

      // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are  (to be decided)
      participants: [
        {
          id: "australianWagyuDenver4", // Unique identifier of any kind
          seed: 4,
          isWinner: false,
          name: "Australian Wagyu Denver",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165106037013",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2297.png?v=1704221405",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
        {
          id: "australianWagyuPicanhaMr13",
          seed: 13,
          isWinner: true,
          // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
          name: "Australian Wagyu Picanha - Margaret River",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165109838101",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2314.png?v=1704221472",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
      ],
    },
    {
      id: 6,
      name: "Match 6",
      nextMatchId: 11, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "1", // Text for Round Header

      // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are  (to be decided)
      participants: [
        {
          id: "australianWagyuFlatIron6", // Unique identifier of any kind
          seed: 6,
          isWinner: true,
          name: "Australian Wagyu Flat Iron",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165109084437",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2303.png?v=1704221459",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
        {
          id: "australianWagyuPicanhaSa11",
          seed: 11,
          isWinner: false,
          name: "Australian Wagyu Picanha - Stone Axe",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165111214357",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2442.png?v=1704221498",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
      ],
    },
    {
      id: 3,
      name: "Match 3",
      nextMatchId: 11, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "1", // Text for Round Header
      // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are  (to be decided)
      participants: [
        {
          id: "australianWagyuBavette3", // Unique identifier of any kind
          seed: 3,
          // Any string works
          isWinner: false,

          name: "Australian Wagyu Bavette",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53181901111573",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2746_916ff3a0-5911-471b-84e3-806383a49573.png?v=1704413828",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
        {
          id: "japaneseWagyuPicanha14",
          seed: 14,
          isWinner: true,
          // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
          name: "Japanese Wagyu Picanha",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53181894295829",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2291.png?v=1704413723",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
      ],
    },
    {
      id: 7,
      name: "Match 7",
      nextMatchId: 12, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "1", // Text for Round Header
      participants: [
        {
          id: "japaneseWagyuRibeye7", // Unique identifier of any kind
          seed: 7,
          isWinner: true,
          name: "Japanese Wagyu Ribeye",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165119897877",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2426.png?v=1704221647",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
        {
          id: "americanWagyuDenver10",
          seed: 10,
          isWinner: false,
          // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
          name: "American Wagyu Denver",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165347832085",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2449.png?v=1704224500",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
      ],
    },
    {
      id: 2,
      name: "Match 2",
      nextMatchId: 12, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "1", // Text for Round Header

      participants: [
        {
          id: "australianWagyuFilet2", // Unique identifier of any kind
          seed: 2,
          isWinner: true,
          name: "Australian Wagyu Filet",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165108363541",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2282.png?v=1704221444",
            altText: false,
            width: 4692,
            height: 4692,
          },
        },
        {
          id: "japaneseWagyuChuckEye15",
          seed: 15,
          isWinner: null,
          name: "Japanese Wagyu Chuck Eye",
          image: {
            __typename: "Image",
            id: "gid://shopify/ProductImage/53165115474197",
            url: "https://cdn.shopify.com/s/files/1/0789/7409/1541/files/2289.png?v=1704221548",
            altText: null,
            width: 4692,
            height: 4692,
          },
        },
      ],
    },
  ],
  round2: [
    {
      id: 9,
      name: "Match 9",
      nextMatchId: 13,
      tournamentRoundText: "2",
      participants: [
        {
          id: "japaneseWagyuFilet1",
          isWinner: true,
          name: "Japanese Wagyu Filet",
        },
        {
          id: "australianWagyuSkirt8",
          isWinner: false,
          name: "Australian Wagyu Skirt Steak",
        },
      ],
    },
    {
      id: 10,
      name: "Match 10",
      nextMatchId: 13, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "2", // Text for Round Header
      participants: [
        {
          id: "usdaPrimePicanha5",
          isWinner: false,
          name: "USDA Prime Picanha",
        },
        {
          id: "australianWagyuPicanhaMr13",
          isWinner: true,
          name: "Australian Wagyu Picanha - Margaret River",
        },
      ],
    },
    {
      id: 11,
      name: "Match 11",
      nextMatchId: 14, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "2", // Text for Round Header
      participants: [
        {
          id: "australianWagyuFlatIron6",
          isWinner: false,
          name: "Australian Wagyu Flat Iron",
        },
        {
          id: "japaneseWagyuPicanha14",
          isWinner: true,
          name: "Japanese Wagyu Picanha",
        },
      ],
    },
    {
      id: 12,
      name: "Match 12",
      nextMatchId: 14, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "2", // Text for Round Header
      participants: [
        {
          id: "japaneseWagyuRibeye7",
          isWinner: true,
          name: "Japanese Wagyu Ribeye",
        },
        {
          id: "australianWagyuFilet2",
          isWinner: false,
          name: "Australian Wagyu Filet",
        },
      ],
    },
  ],
  // semifinals (4)
  round3: [
    {
      id: 13,
      name: "Match 13",
      nextMatchId: 15, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "3", // Text for Round Header

      // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are  (to be decided)
      participants: [
        {
          id: "japaneseWagyuFilet1", // Unique identifier of any kind
          isWinner: true,
          name: "Japanese Wagyu Filet",
        },
        {
          id: "australianWagyuPicanhaMr13",
          isWinner: false,
          name: "Australian Wagyu Picanha - Margaret River",
        },
      ],
    },
    {
      id: 14,
      name: "Match 14",
      nextMatchId: 15, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "3", // Text for Round Header

      // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are  (to be decided)
      participants: [
        {
          id: "japaneseWagyuPicanha14",
          isWinner: null,
          name: "Japanese Wagyu Picanha",
        },
        {
          id: "japaneseWagyuRibeye7",
          isWinner: null,
          name: "Japanese Wagyu Ribeye",
        },
      ],
    },
  ],
  // finals (2)
  round4: [
    {
      id: 15,
      name: "Match 15",
      nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "3", // Text for Round Header

      // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are  (to be decided)
      participants: [
        {
          id: "japaneseWagyuFilet1", // Unique identifier of any kind
          isWinner: null,
          isChampion: null,
          name: "Japanese Wagyu Filet",
        },
        {
          id: "",
          isWinner: null,
          isChampion: null,
          name: "",
        },
      ],
    },
  ],
};

module.exports = bracketMaster;
