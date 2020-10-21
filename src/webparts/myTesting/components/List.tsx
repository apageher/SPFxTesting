import * as React from "react";

export interface IData {
    id: number;
    name: string;
}

export interface IListProps {
    titulo: string;
    list: IData[];
}

const List: React.FC<IListProps> = (props) => {

    return (
        <section>
            <h1 className='big'>{props.titulo}</h1>
            <ul>
                {props.list.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </section>
    )
}

export default List;