import mobiles from '../../assets/images/Categories/phone.png';
import jwellery from '../../assets/images/Categories/jwellery.jpg';
import home from '../../assets/images/Categories/home.png';
import music from '../../assets/images/Categories/music.jpg';
import baby from '../../assets/images/Categories/baby.jpg';
import beauty from '../../assets/images/Categories/beauty.png';
import grocery from '../../assets/images/Categories/grocery.png';
import automotive from '../../assets/images/Categories/automotive.png'
import Unusual from '../../assets/images/Categories/Unusual.webp'
import television from '../../assets/images/Categories/television.webp'
import toys from '../../assets/images/Categories/toys.jpg'
import book from '../../assets/images/Categories/book.jpg'
import computer from '../../assets/images/Categories/computer.png'
import { Link } from 'react-router-dom';

const catNav = [
    {
        name: "Automotive",
        icon: automotive,
    },
    {
        name: "Cell Phones & Accessories",
        icon: mobiles,
    },
    {
        name: "Unusual",
        icon: Unusual,
    },
    {
        name: "Movies & Television",
        icon: television,
    },
    {
        name: "Home & Living",
        icon: home,
    },
    {
        name: "Toys & Hobbies",
        icon: toys,
    },
    {
        name: "Books & Education",
        icon: book,
    },
    {
        name: "Baby",
        icon: baby,
    },
    {
        name: "Health & Beauty",
        icon: beauty,
    },
    {
        name: "Grocery & Household",
        icon: grocery,
    },
    {
        name: "Jwellery & Watches",
        icon: jwellery,
    },
    {
        name: "Music Instruments",
        icon: music,
    },
    {
        name: "Computer Networking",
        icon: computer,
    },
]

const Categories = () => {
    return (
        <section className="hidden sm:block bg-white mt-14 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">

            <div className="flex items-center justify-between mt-4">

                {catNav.map((item, i) => (
                    <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-16 w-16">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default Categories;
