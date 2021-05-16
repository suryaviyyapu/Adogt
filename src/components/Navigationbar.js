import React from 'react'
import { Link } from 'react-router-dom';

function Navigationbar() {
    return (
        <div className="text-white bg-gray-700 flex flex-row h-16 text-lg">
            <div className="flex flex-1">
                <div>
                    <p className="px-4 py-4 font-mono text-xl"><Link to="/">Adogt</Link></p>
                </div>
                <div align="center" className="flex-1 px-2 py-4">
                    <form>
                        <input className="rounded-md w-96 h-auto" type="text" id="search" />
                        <input className="ml-1 w-8 rounded-md bg-green-400" type="submit" value="Go"/>
                    </form>
                </div>
                <div className="flex-2">
                    <p className="mx-4 my-4"><Link to="/contactus">Contact us</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Navigationbar
