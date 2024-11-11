import { navigationItem } from '@/data/navigation';
import Nav from './Nav';
import Nav2 from './Nav2';

function Header() {
    return (
        <header>
            <div className="inner flex flex-col md:flex-row justify-between bg-primary md:bg-gray-500 lg:bg-gray-900"></div>
            <h1>
                <Link href="/" className="flex items-center h-16">
                    logo
                </Link>
            </h1>
            <Nav2 nav={navigationItem} />
        </header>
    );
}

export default Header;
