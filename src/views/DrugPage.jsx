import React, { useEffect, useState } from 'react'
import fetch from 'node-fetch'
function DrugPage(props) {
    const [drugs, setDrugs] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/drug')
            .then(res => res.json())
            .then(json => setDrugs(json));
    }, [])

    return (
        <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">

            <table class="table-fixed">
                <thead>
                    <tr>
                        <th class="w-1/4 px-4 py-2 text-blue-600">ID</th>
                        <th class="w-1/2 px-4 py-2 text-blue-600">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {drugs.map(item => <tr>
                        <td class="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{item.drugId}</td>
                        <td class="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{item.name}</td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    )
}

DrugPage.propTypes = {

}

export default DrugPage

