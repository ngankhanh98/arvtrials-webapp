import React, { useEffect, useState } from 'react'
import fetch from 'node-fetch'
function DrugForm(props) {
    const [drugId, setDrugId] = useState('')
    const [name, setName] = useState('')
    const submitDrug = async () => {
        fetch('http://localhost:8080/drug', {
            method: 'POST', body: JSON.stringify({ drugId: drugId, name: name }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json()) // expecting a json response
            .then(json => console.log(json));
    }

    useEffect(() => {
        console.log('name', name)
        console.log('drugId', drugId)
    }, [name, drugId])

    return (
        <form class="mt-8 space-y-6" onSubmit={submitDrug}>
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="drugId" class="sr-only">Drug id</label>
                    <input id="drugId" name="drugId" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Drug id" onChange={e => setDrugId(e.target.value)} />
                </div>
                <div>
                    <label for="name" class="sr-only">Drug name</label>
                    <input id="name" name="name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" onChange={e => setName(e.target.value)} /></div>
            </div>
            <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add drug
        </button>
            </div>
        </form>
    )
}

DrugForm.propTypes = {

}

export default DrugForm

