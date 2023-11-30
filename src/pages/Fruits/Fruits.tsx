import React, {useEffect, useState} from 'react';
import {listFruis} from "../../data/Fruits";
import Table from "../../components/table/Table";

import "./Fruits.scss";
import Button from "../../components/button/Button";

interface Fruits {
    name: string;
    id: number;
    family: string;
    order: string;
    genus: string;
}


const Fruits = () => {

    const [data, setData] = useState<Fruits[]>([])

    useEffect(() => {
        setData(listFruis);
    }, [])


    return (
        <div className="container_fruits">
            <div className="container_fruits__list-fruits">
                <p className="title">Lista de frutas</p>
                <div>
                    <Table data={data}/>
                </div>
            </div>
        </div>

    );
};

export default Fruits;