import img1 from '../media/projects/img1.webp';
import img2 from '../media/projects/img2.webp';
import img3 from '../media/projects/img3.webp';
import img4 from '../media/projects/img4.webp';

const projects = [
    {
        id: crypto.randomUUID(),
        title: 'Facelock Fairview',
        about: 'SOCIAL WEBSITE REDESIGN',
        description:
            'As a top commercial real estate company, we consolidated multiple sites for better brand consistency and accessibility.',
        image: img1,
    },
    {
        id: crypto.randomUUID(),
        title: 'Agriculture, Redefined',
        about: 'Population',
        description:
            'As a top commercial real estate company, we consolidated multiple sites for better brand consistency and accessibility.',
        image: img2,
    },
    {
        id: crypto.randomUUID(),
        title: 'Huloo',
        about: 'SOCIAL MEDIA WEBSITE',
        description:
            'As a top commercial real estate company, we consolidated multiple sites for better brand consistency and accessibility.',
        image: img3,
    },
    {
        id: crypto.randomUUID(),
        title: 'Finstagram',
        about: 'SOCIAL Media Web App',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a doloremque architecto atque, corporis necessitatibus?',
        image: img4,
    },
];

export default projects