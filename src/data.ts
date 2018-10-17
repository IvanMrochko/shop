import { ICategory, IFilter, IProduct } from "./types";

const categories: ICategory[] = [
  {
    id: "1",
    name: "Меню от Шефа",
    image:
      "http://cashemir.com.ua/upload/shop_2/4/3/0/item_43073/small_shop_items_catalog_image43073.jpg"
  },
  {
    id: "2",
    name: "Холодные закуски",
    image:
      "http://cashemir.com.ua/upload/shop_2/7/4/2/item_742/small_shop_items_catalog_image742.jpg"
  },
  {
    id: "3",
    name: "Горячие закуски",
    image:
      "http://cashemir.com.ua/upload/shop_2/4/2/9/item_42931/small_shop_items_catalog_image42931.jpg"
  },
  {
    id: "4",
    name: "Салаты",
    image:
      "http://cashemir.com.ua/upload/shop_2/4/2/9/item_42998/small_shop_items_catalog_image42998.jpeg"
  },
  {
    id: "5",
    name: "Первые блюда",
    image:
      "http://cashemir.com.ua/upload/shop_2/7/5/8/item_758/small_shop_items_catalog_image758.jpg"
  },
  {
    id: "6",
    name: "Рыба",
    image:
      "http://cashemir.com.ua/upload/shop_2/4/3/0/item_43029/small_shop_items_catalog_image43029.jpg"
  },
  {
    id: "7",
    name: "Птица и мясо",
    image:
      "http://cashemir.com.ua/upload/shop_2/4/3/0/item_43011/small_shop_items_catalog_image43011.jpg"
  },
  {
    id: "8",
    name: "Паста и вареники",
    image:
      "http://cashemir.com.ua/upload/shop_2/7/7/3/item_773/small_shop_items_catalog_image773.jpg"
  },
  {
    id: "9",
    name: "Десерты",
    image:
      "http://cashemir.com.ua/upload/shop_2/4/3/0/item_43002/small_shop_items_catalog_image43002.jpeg"
  }
];

const products: IProduct[] = [
  {
    id: "0",
    title: "Салат с креветками",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43075/small_shop_items_catalog_image43075.jpg",
    size: "270 ",
    price: 295,
    description:
      "Салат с креветками, бэби миксом, авокадо и яблочно-ореховой заправкой",
    category_id: "1",
    tag: "Популярное"
  },
  {
    id: "1",
    title: "Салат из утиной грудинки ",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43076/small_shop_items_catalog_image43076.jpg",
    size: "250 г",
    price: 190,
    description:
      "Салат из утиной грудинки с салатом Айсберг, рукколой, ростками и апельсином в вишнёвом дыме",
    category_id: "1",
    tag: "Популярное"
  },
  {
    id: "2",
    title: "Утиная грудинка ",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43074/small_shop_items_catalog_image43074.jpg",
    size: "270 г",
    price: 245,
    description: "Утиная грудинка с пшеничными лепёшками и свежими овощами",
    category_id: "1",
    tag: "Популярное"
  },
  {
    id: "3",
    title: "Суп Фо Бо",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43077/small_shop_items_catalog_image43077.jpg",
    size: "450 г",
    price: 195,
    description: "Суп Фо Бо",
    category_id: "1",
    tag: "Популярное"
  },
  {
    id: "4",
    title: "T-Bone с обжаренным ананасом",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43078/small_shop_items_catalog_image43078.jpg",
    size: "500",
    price: 500,
    description:
      "T-Bone с обжаренным ананасом, ананасовой сальсой и свежим кориандром",
    category_id: "1",
    tag: "Популярное"
  },
  {
    id: "5",
    title: "Тайские шашлычки с телятиной",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43073/small_shop_items_catalog_image43073.jpg",
    size: "130 г",
    price: 180,
    description: "Тайские шашлычки с телятиной",
    category_id: "1",
    tag: "Популярное"
  },
  {
    id: "6",
    title: "Тайские шашлычки с курицей",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43071/small_shop_items_catalog_image43071.jpg",
    size: "",
    price: 0,
    description: "Тайские шашлычки с курицей",
    category_id: "1",
    tag: "Популярное"
  },
  {
    id: "7",
    title: "Тайские шашлычки с креветками",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43072/small_shop_items_catalog_image43072.jpg",
    size: "130 г",
    price: 110,
    description: "Тайские шашлычки с креветками",
    category_id: "1",
    tag: "Популярное"
  },
  {
    id: "8",
    title: "Ассорти брускетт",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/4/6/item_746/small_shop_items_catalog_image746.jpg",
    size: "100 г",
    price: 205,
    description: "Ассорти брускетт",
    category_id: "2",
    tag: "Популярное"
  },
  {
    id: "9",
    title: "Ассорти домашних копченостей",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/3/8/item_738/small_shop_items_catalog_image738.jpg",
    size: "",
    price: 0,
    description: "Ассорти домашних копченостей",
    category_id: "2",
    tag: "Популярное"
  },
  {
    id: "10",
    title: "Ассорти изысканных сыров",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/3/9/item_739/small_shop_items_catalog_image739.jpg",
    size: "300 г",
    price: 140,
    description: "Ассорти изысканных сыров",
    category_id: "2",
    tag: "Популярное"
  },
  {
    id: "11",
    title: "Ассорти итальянской гастрономии",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/4/1/item_741/small_shop_items_catalog_image741.jpg",
    size: "400/100 г",
    price: 280,
    description: "Ассорти итальянской гастрономии",
    category_id: "2",
    tag: "Популярное"
  },
  {
    id: "12",
    title: "Ассорти сала",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/4/2/item_742/small_shop_items_catalog_image742.jpg",
    size: "400/100/40 г",
    price: 155,
    description: "Ассорти сала",
    category_id: "2",
    tag: "Популярное"
  },
  {
    id: "13",
    title: "Закуска анти-паста",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/4/4/item_744/small_shop_items_catalog_image744.jpg",
    size: "300/200 г",
    price: 170,
    description: "Закуска анти-паста",
    category_id: "2",
    tag: "Популярное"
  },
  {
    id: "14",
    title: "Карпаччо по-норвежски",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/4/0/item_740/small_shop_items_catalog_image740.jpg",
    size: "150/100 г",
    price: 180,
    description: "Карпаччо по-норвежски",
    category_id: "2",
    tag: "Популярное"
  },
  {
    id: "15",
    title: "Рулетики из хамона и баклажана",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/3/7/item_737/small_shop_items_catalog_image737.jpg",
    size: "200",
    price: 160,
    description: "Рулетики из хамона и баклажана с мягким сыром",
    category_id: "2",
    tag: "Популярное"
  },
  {
    id: "16",
    title: "Форшмак из сельди",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/4/3/item_743/small_shop_items_catalog_image743.jpg",
    size: "250/70 г",
    price: 130,
    description: "Форшмак из сельди",
    category_id: "1",
    tag: "Популярное"
  },
  {
    id: "17",
    title: "Щучья икра с хрустящими гренками",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/4/5/item_745/small_shop_items_catalog_image745.jpg",
    size: "100/50/50  ",
    price: 345,
    description: "Щучья икра с хрустящими гренками",
    category_id: "2",
    tag: "Популярное"
  },
  {
    id: "18",
    title: "Жюльен из краба в хрустящем тесте",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/4/7/item_747/small_shop_items_catalog_image747.jpg",
    size: "130/30 г",
    price: 270,
    description: "Жюльен из краба в хрустящем тесте",
    category_id: "3",
    tag: "Популярное"
  },
  {
    id: "19",
    title: "Ролл темпура из угря с листьями салата",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/2/9/item_42931/small_shop_items_catalog_image42931.jpg",
    size: "",
    price: 0,
    description: "Ролл темпура из угря с листьями салата",
    category_id: "3",
    tag: "Популярное"
  },
  {
    id: "20",
    title: "Сыр камамбер в трех видах панировки ",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/4/8/item_748/small_shop_items_catalog_image748.jpg",
    size: "200/80 г",
    price: 0,
    description: "Сыр камамбер в трех видах панировки",
    category_id: "3",
    tag: "Популярное"
  },
  {
    id: "21",
    title: "Салат из телятины с соусом Хойсин",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/5/3/item_753/small_shop_items_catalog_image753.jpg",
    size: "300 ",
    price: 215,
    description: "Салат из телятины с соусом Хойсин",
    category_id: "4",
    tag: "Популярное"
  },
  {
    id: "22",
    title: "Салат с лососем в азиатском стиле",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/5/1/item_751/small_shop_items_catalog_image751.jpg",
    size: "300 г",
    price: 260,
    description: "Салат с лососем в азиатском стиле",
    category_id: "4",
    tag: "Популярное"
  },
  {
    id: "23",
    title: "Салат-микс из овощей и лосося",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/5/4/item_754/small_shop_items_catalog_image754.jpg",
    size: "250 г",
    price: 185,
    description: "Салат-микс из овощей и лосося в икорно-перечном соусе",
    category_id: "4",
    tag: "Популярное"
  },
  {
    id: "24",
    title: "Теплый салат из телятины гриль и тайского соуса",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/5/5/item_755/small_shop_items_catalog_image755.jpg",
    size: "270 г",
    price: 215,
    description: "Теплый салат из телятины гриль и тайского соуса",
    category_id: "4",
    tag: "Популярное"
  },
  {
    id: "25",
    title: "Цезарь с курицей и авокадо",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/5/0/item_750/small_shop_items_catalog_image750.jpg",
    size: "300 г",
    price: 185,
    description: "Цезарь с курицей и авокадо",
    category_id: "4",
    tag: "Популярное"
  },
  {
    id: "26",
    title: "Салат из гребешка с вялеными томатами и авокадо",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/2/9/item_42998/small_shop_items_catalog_image42998.jpeg",
    size: "200 г",
    price: 245,
    description: "Салат из гребешка с вялеными томатами и авокадо",
    category_id: "4",
    tag: "Популярное"
  },
  {
    id: "27",
    title: "Салат с индейкой, клубникой  ",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43010/small_shop_items_catalog_image43010.jpg",
    size: "250 г",
    price: 190,
    description: "Салат с индейкой, клубникой  ",
    category_id: "4",
    tag: "Популярное"
  },
  {
    id: "28",
    title: "Крем-суп из цукини с маринованными креветками",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/5/9/item_759/small_shop_items_catalog_image759.jpg",
    size: "250/30 г",
    price: 125,
    description: "Крем-суп из цукини с маринованными креветками",
    category_id: "5",
    tag: "Популярное"
  },
  {
    id: "29",
    title: "Куриный бульон с перепелиным яйцом",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/5/7/item_757/small_shop_items_catalog_image757.jpg",
    size: "250 г",
    price: 105,
    description: "Куриный бульон с перепелиным яйцом",
    category_id: "5",
    tag: "Популярное"
  },
  {
    id: "30",
    title: "Томатный суп с морепродуктами",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/5/8/item_758/small_shop_items_catalog_image758.jpg",
    size: "250 г",
    price: 180,
    description: "Томатный суп с морепродуктами",
    category_id: "5",
    tag: "Популярное"
  },
  {
    id: "31",
    title: "Лосось sous-vide с огурцами в укропном соусе и гороховым пюре",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43028/small_shop_items_catalog_image43028.jpg",
    size: "130/150 г",
    price: 260,
    description:
      "Лосось sous-vide с огурцами в укропном соусе и гороховым пюре",
    category_id: "6",
    tag: "Популярное"
  },
  {
    id: "32",
    title: "Дорадо с бататом и лесными грибами",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43029/small_shop_items_catalog_image43029.jpg",
    size: "150/150 г",
    price: 315,
    description: "Дорадо с бататом и лесными грибами",
    category_id: "6",
    tag: "Популярное"
  },
  {
    id: "33",
    title: "Форель с овощами в тайском стиле",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43027/small_shop_items_catalog_image43027.jpg",
    size: "300/10 г",
    price: 290,
    description: "Форель с овощами в тайском стиле",
    category_id: "6",
    tag: "Популярное"
  },
  {
    id: "34",
    title: "Сковорода с морепродуктами ",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/6/2/item_762/small_shop_items_catalog_image762.jpg",
    size: "400/50 г",
    price: 405,
    description: "Сковорода с морепродуктами",
    category_id: "6",
    tag: "Популярное"
  },
  {
    id: "35",
    title: "Каре ягненка в хрустящей корочке ",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43025/small_shop_items_catalog_image43025.jpg",
    size: "170/150/30 г",
    price: 315,
    description:
      "Каре ягненка в хрустящей корочке с хумусом и кисло-сладким соусом",
    category_id: "7",
    tag: "Популярное"
  },
  {
    id: "36",
    title: "Стейк Рибай с брокколи",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43026/small_shop_items_catalog_image43026.jpg",
    size: "270/70/30 г",
    price: 415,
    description: "Стейк Рибай с брокколи",
    category_id: "7",
    tag: "Популярное"
  },
  {
    id: "37",
    title: "Телятина маринованная в виски с тыквой",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43024/small_shop_items_catalog_image43024.jpg",
    size: "300 г",
    price: 305,
    description: "Телятина маринованная в виски с тыквой",
    category_id: "7",
    tag: "Популярное"
  },
  {
    id: "38",
    title: "Ягненок на гороховом пюре в винном соусе",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43023/small_shop_items_catalog_image43023.jpg",
    size: "100/150/50 г",
    price: 210,
    description: "Ягненок на гороховом пюре в винном соусе",
    category_id: "7",
    tag: "Популярное"
  },
  {
    id: "39",
    title: "Индейка с карамелизированными овощами ",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43011/small_shop_items_catalog_image43011.jpg",
    size: "250/50/30 г",
    price: 215,
    description: "Индейка с карамелизированными овощами",
    category_id: "7",
    tag: "Популярное"
  },

  {
    id: "41",
    title: "Вареники с лососем и соусом из икры сельди",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/7/4/item_774/small_shop_items_catalog_image774.jpg",
    size: "250/50/10 г",
    price: 150,
    description: "Вареники с лососем и соусом из икры сельди",
    category_id: "8",
    tag: "Популярное"
  },
  {
    id: "42",
    title: "Карбонара",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/7/5/item_775/small_shop_items_catalog_image775.jpg",
    size: "250 г",
    price: 170,
    description: "Карбонара",
    category_id: "8",
    tag: "Популярное"
  },
  {
    id: "43",
    title: "Паста с морепродуктами в томатном соусе",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/7/3/item_773/small_shop_items_catalog_image773.jpg",
    size: "250 г",
    price: 205,
    description: "Паста с морепродуктами в томатном соусе",
    category_id: "8",
    tag: "Популярное"
  },
  {
    id: "44",
    title: "Торт орехово-шоколадный ",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43008/small_shop_items_catalog_image43008.jpg",
    size: "170 г",
    price: 110,
    description: "Торт орехово-шоколадный ",
    category_id: "9",
    tag: "Популярное"
  },
  {
    id: "45",
    title: "Карамельно-кофейный торт",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43002/small_shop_items_catalog_image43002.jpeg",
    size: "200 г",
    price: 120,
    description: "Карамельно-кофейный торт",
    category_id: "9",
    tag: "Популярное"
  },
  {
    id: "46",
    title: "Крем-брюле с ванилью и розмарином",
    image:
      "http://cashemir.com.ua//upload/shop_2/7/7/8/item_778/small_shop_items_catalog_image778.jpg",
    size: "150 г",
    price: 80,
    description: "Крем-брюле с ванилью и розмарином",
    category_id: "9",
    tag: "Популярное"
  },
  {
    id: "47",
    title: "Чизкейк",
    image:
      "http://cashemir.com.ua//upload/shop_2/4/3/0/item_43019/small_shop_items_catalog_image43019.png",
    size: "200 г",
    price: 165,
    description: "Чизкейк",
    category_id: "9",
    tag: "Популярное"
  }
];

const filters: IFilter[] = [
  {
    id: "meny",
    name: "МЕНЮ",
    items: categories.map(c => ({
      id: c.id,
      name:
        c.name +
        " (" +
        products.filter(t => t.category_id === c.id).length +
        ")"
    }))
  },
  {
    id: "meny",
    name: "КОМПЛЕКСНОЕ ПРЕДЛОЖЕНИЕ",
    items: [
      {
        id: "s1",
        name:
          "$0 - $150 (" +
          products.filter(t => t.price >= 0.0 && t.price <= 150.0).length +
          ")"
      },
      {
        id: "s2",
        name:
          "$150 - $300 (" +
          products.filter(t => t.price > 150.0 && t.price <= 300.0).length +
          ")"
      },
      {
        id: "s3",
        name:
          "$300 - $500 (" +
          products.filter(t => t.price > 300.0 && t.price <= 500.0).length +
          ")"
      }
    ]
  }
];

export { products, categories, filters };
