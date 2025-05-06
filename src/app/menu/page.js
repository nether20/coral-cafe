import Image from "next/image"

export default function Menu() {
    return (
        <div className="menu">
            <h1>Menu</h1>
            <h2>Drinks</h2>
            <li>
                <ul>$5 - Krabby Kocktail</ul>
                <ul><Image src="https://cdn.mos.cms.futurecdn.net/SRdGNTqjvjVoQ2XYrgEjLN-1200-80.jpg" className="pic" width={200} height={200} alt=""/></ul>
                <ul>$5 - Sea Cucmber Slushie</ul>
                <ul><Image src="https://www.nhm.ac.uk/content/dam/nhm-www/discover/sea-cucumbers/leopard-sea-cucumber-cuverian-tubules-defence-full-width.jpg.thumb.1160.1160.png" className="pic" width={200} height={200} alt=""/></ul>
                <ul>$7 - Seagrass Iced Tea</ul>
                <ul><Image src="https://floridadep.gov/sites/default/files/media-folders/media-root/St.%20Martins%20Marsh%20Aquatic%20Preserve%20-%20DEP%20Staff%20-%20Jon%20Brucker%20-%20Turtlegras%20Medow.jpg" className="pic" width={200} height={200} alt=""/></ul>
                <ul>$5 - Snail-Cola</ul>
                <ul><Image src="https://columbian.gwu.edu/sites/g/files/zaxdzs4901/files/image/Nautilus%20Pic_1080x720.jpg" className="pic" width={200} height={200} alt=""/></ul>
            </li>
            <br/>
            <h2>Appetizers</h2>
            <li>
                <ul>$10 - Parrotfish in a Blanket</ul>
                <ul><Image src="https://oceanconservancy.org/wp-content/uploads/2021/06/Screen-Shot-2021-06-17-at-11.31.27-AM-e1623943971271.png" className="pic" width={200} height={200} alt=""/></ul>
                <ul>$8 - Barnacle Fries</ul>
                <ul><Image src="https://theoutershores.com/wp-content/uploads/2013/12/p1010577_lr.jpg?w=1024" className="pic" width={200} height={200} alt=""/></ul>
                <ul>$15 - Snailcuterie</ul>
                <ul><Image src="https://columbian.gwu.edu/sites/g/files/zaxdzs4901/files/image/Nautilus%20Pic_1080x720.jpg" className="pic" width={200} height={200} alt=""/></ul>
                <ul>$10 - Mollusk Mash</ul>
                <ul><Image src="https://columbian.gwu.edu/sites/g/files/zaxdzs4901/files/image/Nautilus%20Pic_1080x720.jpg" className="pic" width={200} height={200} alt=""/></ul>
            </li>
            <br/>
            <h2>Entrees</h2>
            <li>
                <ul>$15 - Sea turtle soup</ul>
                <ul><Image src="https://www.vacationscostarica.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Fvacationscostarica-com%2Fimage%2Fupload%2Fc_scale%2Cw_640%2Cq_auto%2Cf_webp%2Fgreen_sea_turtle_stock_diving_8223c87d38.jpg&w=992&q=75" className="pic" width={200} height={200} alt=""/></ul>
                <ul>$15 - Manatee Meatballs</ul>
                <ul><Image src="https://www.nhm.ac.uk/content/dam/nhm-www/discover/manatees/manatee-close-up-full-width.jpg.thumb.1160.1160.png" className="pic" width={200} height={200} alt=""/></ul>
                <ul>$25 - Smokey Honey Mustard Snail Chops</ul>
                <ul><Image src="https://columbian.gwu.edu/sites/g/files/zaxdzs4901/files/image/Nautilus%20Pic_1080x720.jpg" className="pic" width={200} height={200} alt=""/></ul>
                <ul>$25 - Creamy Pasta with Peppers and Smoked Zooxanthellae</ul>
                <ul><Image src="https://oceanservice.noaa.gov/education/tutorial_corals/coral-polyps.jpg" className="pic" width={200} height={200} alt=""/></ul>
            </li>
            <br/>
            <br/>
            <br/>
        </div>
    )
}