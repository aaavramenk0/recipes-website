import Image from 'next/image'
import recipe64 from '../icons/recipe64.png'

export default () => {

    const footerNavs = [
        { href: '/', name: 'Home' },
        { href: '/links/recipes', name: 'Recipes catalog' },
        { href: '/links/authors', name: 'Our authors' },
        { href: '/links/add-recipe', name: 'Add your recipe' }
    ]

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <Image
                    
                    src={ recipe64 }
                    className="sm:mx-auto"
                    width={64}
                    height={64}
                    alt='Logo of the company' />
                <p className="leading-relaxed mt-2 text-[18px] font-black">
                    Taste the World: Your Culinary Journey Begins Here!
                </p>
            </div>
            <ul className="items-center justify-center mt-[15px] space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li key={idx} className=" hover:font-bold hover:underline font-semibold">
                            <a href={item.href}>
                                { item.name }
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-[15px] items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0 w-[100%] text-center">
                    &copy; Developed by Avramenko Oleksandr in 2023
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}
