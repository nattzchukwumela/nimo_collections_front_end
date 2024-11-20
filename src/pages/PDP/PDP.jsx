import { useParams } from "react-router-dom"
import { CLOTHS_DATA } from "../../db/CLOTHS_DATA";

export function PDP() {

    const { id } = useParams();
    console.log(id);

    const findProductById = CLOTHS_DATA.men.find(item => item.id === id);

    return (<>
        <h2>PDP</h2>
        <div className="pdp-container">
            <div className="pdp-image">
                <img src={findProductById.image} alt="" />
            </div>
        </div>
    </>)
}