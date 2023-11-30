import React, {useState} from "react";

import "./Table.scss";

interface ITable {
    data: IData[]
}

interface IData {
    name: string;
    id: number;
    family: string;
    order: string;
    genus: string;
}

const Table: React.FC<ITable> = ({data}) => {
    return (
        <>
            <div className="table-app">
                <div className="overflow">
                    <table className="table-app__content" data-testid="pokemon-table">
                        <thead>
                        <tr className="header">
                            <th className="header__item" scope="col">
                                ID
                            </th>
                            <th className="header__item" scope="col">
                                NOMBRE
                            </th>
                            <th className="header__item" scope="col">
                                FAMILIA
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {data?.length > 0 &&
                            data?.map((item, index) => (
                                <tr className="body" key={`row-${index}`} data-testid="item">
                                    <td className="body__item">{item.id}</td>
                                    <td className="body__item">{item.name}</td>
                                    <td className="body__item">{item.family}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Table;