import Image from "next/image";

export default function Menu() {
    return (
        <div className="menu">
            <h1>Menu</h1>
            <h2>Drinks</h2>
            <li>
                <ul>$5 - Krabby Kocktail</ul>
                <ul>$5 - Sea Cucmber Slushie</ul>
                <ul>$7 - Seagrass Iced Tea</ul>
                <ul>$5 - Snail-Cola</ul>
            </li>
            <br/>
            <h2>Appetizers</h2>
            <li>
                <ul>$10 - Parrotfish in a Blanket</ul>
                <ul>$8 - Barnacle Fries</ul>
                <ul>$15 - Snailcuterie</ul>
                <ul>$10 - Mollusk Mash</ul>
            </li>
            <br/>
            <h2>Entrees</h2>
            <li>
                <ul>$15 - Sea turtle soup</ul>
                <ul>$15 - Manatee Meatballs</ul>
                <ul>$25 - Smokey Honey Mustard Snail Chops</ul>
                <ul>$25 - Creamy Pasta with Peppers and Smoked Zooxanthellae</ul>
            </li>
            <br/>
            <br/>
            <br/>
        </div>
    )
}