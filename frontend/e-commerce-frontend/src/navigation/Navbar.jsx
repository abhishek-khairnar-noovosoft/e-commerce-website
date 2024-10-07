import Logo from "./components/Logo.jsx";
import NavItem from "./components/NavItem.jsx";

export default function () {
    return (
        <>
            <div id={"nav"}>
                <Logo/>
                <NavItem name={"Home"}/>
                <NavItem name={"About"}/>
            </div>
        </>
    )
}