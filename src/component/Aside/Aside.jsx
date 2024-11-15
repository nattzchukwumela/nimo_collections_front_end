import './aside.css'

export function Aside() {
    return (
        <aside className="aside">
            <div className="men">
                <div className="category">
                    <h2>Category</h2>
                    <ul>
                        <li>hoodies</li>
                        <li>Native Cloths</li>
                        <li>Sport</li>
                        <li>Shots</li>
                        <li>Formal</li>
                    </ul>
                </div>
                <div className="brand">
                    <form>
                        <h2>Brands</h2>
                        Adidas:<input type="checkbox" name="brand" id="adidas" />
                        Nike:<input type="checkbox" name="brand" id="nike" />
                        Levis:<input type="checkbox" name="brand" id="levis" />
                        Zara:<input type="checkbox" name="brand" id="zara" />
                        Puma:<input type="checkbox" name="brand" id="puma" />
                    </form>
                </div>
            </div>
        </aside>)
}