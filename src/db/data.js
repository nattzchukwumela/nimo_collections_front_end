
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




export const CLOTHS_DATA = {
    men: [
        {
            id: idGen(5),
            name: 'Hoodie',
            price: 300,
            image: hoods,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'Mens Joggers',
            price: 360,
            image: men,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'Black Joggers',
            price: 30,
            image: joggers,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'grey Shots',
            price: 340,
            image: shot4,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'Multi Color Shots',
            price: 20,
            image: shots2,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'Mens Top',
            price: 15,
            image: top1,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'Long sleeved',
            price: 250,
            image: longsleeve,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'black sharp short',
            price: 10,
            image: shot5,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'short & top',
            price: 10,
            image: shot_top,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'Dynamo Hoodie',
            price: 20,
            image: hood,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'Levis Shots',
            price: 10,
            image: shot3,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'Grey Thick Short',
            price: 35,
            image: shot6,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'Black Sport Short',
            price: 15,
            image: sport,
            description: 'lorem'
        },
        {
            id: idGen(5),
            name: 'Grey long Sleeved Top',
            price: 10,
            image: top3,
            description: 'lorem'
        },
    ]
}
