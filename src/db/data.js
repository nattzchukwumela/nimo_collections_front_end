
import { generateId as idGen } from '../utility/idGen';

// mens cloths
import hoods from '../assets/products/cloth/men/hood2.jpg';
import men from '../assets/products/cloth/men/1.jpg';
import joggers from '../assets/products/cloth/men/joggers.jpg';
import shot4 from '../assets/products/cloth/men/shot4.jpg';
import shots2 from '../assets/products/cloth/men/shots2.jpg';
import top1 from '../assets/products/cloth/men/top1.jpg';
import longsleeve from '../assets/products/cloth/men/longsleeve.jpg';
import shot5 from '../assets/products/cloth/men/shot5.jpg';
import shot_top from '../assets/products/cloth/men/top2.jpg';
import hood from '../assets/products/cloth/men/hood.jpg';
import shot3 from '../assets/products/cloth/men/shot3.jpg';
import shot6 from '../assets/products/cloth/men/shot6.jpg';
import sport from '../assets/products/cloth/men/sport.jpg';
import top3 from '../assets/products/cloth/men/top3.jpg';

// womens cloths
import yellow from '../assets/products/cloth/women/1.jpg';
import bape_fashion from '../assets/products/cloth/women/raid.jpg';
import black_girl_hoodoe from '../assets/products/cloth/women/black.jpg';
import casual_pieces from '../assets/products/cloth/women/casual-pieces.jpg';
import crewneck from '../assets/products/cloth/women/crewneck.jpg';
// import cute_sleeves from '../assets/products/cloth/women/cute-sleeves.jpg';
import essential from '../assets/products/cloth/women/essential.jpg';
import flared_skirt from '../assets/products/cloth/women/flared-skirt.jpg';
import korean_mini_skirt from '../assets/products/cloth/women/korean-mini-skirt.jpg';
import long_sleeved_white_hoodie from '../assets/products/cloth/women/long-sleeved-white-hoodie.jpg';
import mini_skirt from '../assets/products/cloth/women/mini-skirts.jpg';
import pleated from '../assets/products/cloth/women/pleated.jpg';
import rainbow from '../assets/products/cloth/women/rainbow-strip.jpg';
import running_sleeves from '../assets/products/cloth/women/running-sleeves.jpg';
import tights from '../assets/products/cloth/women/tights.jpg';
import unisex_women from '../assets/products/cloth/women/unisex-women.jpg';
import white from '../assets/products/cloth/women/white.jpg';
import womens_black_hoodie from '../assets/products/cloth/women/womens-black-hoodie.jpg';
import womens_pleated from '../assets/products/cloth/women/womens-pleated.jpg';

export const CLOTHS_DATA = {
    men: [
        {
            id: idGen(5),
            name: 'Hoodie',
            price: 300,
            image: hoods,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Mens Joggers',
            price: 360,
            image: men,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Black Joggers',
            price: 30,
            image: joggers,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'grey Shots',
            price: 340,
            image: shot4,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Multi Color Shots',
            price: 20,
            image: shots2,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Mens Top',
            price: 15,
            image: top1,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Long sleeved',
            price: 250,
            image: longsleeve,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'black sharp short',
            price: 10,
            image: shot5,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'short & top',
            price: 10,
            image: shot_top,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Dynamo Hoodie',
            price: 20,
            image: hood,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Levis Shots',
            price: 10,
            image: shot3,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Grey Thick Short',
            price: 35,
            image: shot6,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Black Sport Short',
            price: 15,
            image: sport,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Grey long Sleeved Top',
            price: 10,
            image: top3,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
    ],
    women: [
        {
            id: idGen(5),
            name: 'Yellow Top',
            price: 10,
            image: yellow,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Bape Fashion',
            price: 20,
            image: bape_fashion,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Black Hoodie',
            price: 40,
            image: black_girl_hoodoe,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Casual Pieaces',
            price: 60,
            image: casual_pieces,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Black Hoodie',
            price: 5,
            image: crewneck,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Essential',
            price: 75,
            image: essential,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`

        },
        {
            id: idGen(5),
            name: 'Flared',
            price: 20,
            image: flared_skirt,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Korean Mini Skirt',
            price: 10,
            image: korean_mini_skirt,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'White Sleeved Hoodie',
            price: 90,
            image: long_sleeved_white_hoodie,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Mini Skirt',
            price: 15,
            image: mini_skirt,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Pleated',
            price: 10,
            image: pleated,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Rainbow',
            price: 30,
            image: rainbow,
            description: `
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Runner Sleeves',
            price: 44,
            image: running_sleeves,
            description: `
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'sport tights',
            price: 34,
            image: tights,
            description: `
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Unisex Girls',
            price: 22,
            image: unisex_women,
            description: `
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'white hoodie',
            price: 5,
            image: white,
            description: `
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Women Black Hoodie',
            price: 15,
            image: womens_black_hoodie,
            description: `
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Womens Pleated',
            price: 55,
            image: womens_pleated,
            description: `
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },
        {
            id: idGen(5),
            name: 'Womens Sweatshirt',
            price: 30,
            image: flared_skirt,
            description: `
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, sequi! Tempora vero delectus repellat, cupiditate reprehenderit deserunt. Assumenda, mollitia rerum!`
        },

    ]
}
