
export function ProductStatus() {

    const style = {
        background: 'green',
    }

    return (<section className="admin-sec-2">
        <h2>Product Status</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Price</th>
                    <th>Total Stock</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Samsung</td>
                    <td>23sdg3</td>
                    <td>$234</td>
                    <td>45</td>
                    <td style={style}>in stock</td>
                    <td>Action</td>
                </tr>
                <tr>
                    <td>Tecno</td>
                    <td>2dg3g3</td>
                    <td>$23</td>
                    <td>50</td>
                    <td style={style}>in stock</td>
                    <td>Action</td>
                </tr>
                <tr>
                    <td>Tecno</td>
                    <td>2dg3g3</td>
                    <td>$23</td>
                    <td>50</td>
                    <td style={style}>in stock</td>
                    <td>Action</td>
                </tr>
                <tr>
                    <td>Tecno</td>
                    <td>2dg3g3</td>
                    <td>$23</td>
                    <td>50</td>
                    <td style={style}>in stock</td>
                    <td>Action</td>
                </tr>
            </tbody>
        </table>
        {}
    </section>)
}