import { faEuroSign, faSortAlphaDown, faStar } from "@fortawesome/free-solid-svg-icons";

const sortByListData = [
    {
        sortBy: 'alphabetically',
        text: 'alphabetically',
        icon: faSortAlphaDown
    },
    {
        sortBy: 'price',
        text: 'price',
        icon: faEuroSign
    },
    {
        sortBy: 'rating',
        text: 'star rating',
        icon: faStar
    }
];

export default sortByListData;