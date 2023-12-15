import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, menu } from "@nextui-org/react"
import logo  from '../icons/recipe32.png'
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Router, useRouter } from "next/router"

export default function NavbarPage() {
    const menuItems = [
        { label: "Home", href: "/", isActive: true},
        { label: "Recipe Catalog", href: "/links/recipes", isActive: false },
        { label: "Our Authors", href: "/links/authors", isActive: false },
        { label: "Add your recipe", href: "/links/add-recipe", isActive: false }
    ]
    return (
        <Navbar isBordered>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Image src = {logo} alt="Logo"></Image>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Image src = {logo} alt="Logo"></Image>
                </NavbarBrand>
                
                {menuItems.map((item, index) => (
                    <NavbarItem isActive={item.isActive} key={index}>
                        <Link color="foreground" href={item.href}>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button className="text-[16px]" as={Link} color="secondary" href="/links/login" variant="light">Log in</Button>
                </NavbarItem>
                <NavbarItem>
                    <Button className="text-[16px] " as={Link} color="secondary" href="/links/signup" variant="ghost">Sign up</Button>    
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link className="w-full" color={index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"} href={item.href} size="lg">{item.label}</Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}