import React from 'react';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
// import { starWars } from 'unique-names-generator/dist/dictionaries';
// import { uniqueNamesGenerator } from 'unique-names-generator';
import styles from './StarWarsNameClass.scss';


interface IStarsWarsNameFunctionState {
    name: string;
    count: number;
}

export function StarWarsNameFunction() {
    const randomName = () => uniqueNamesGenerator( {dictionaries: [ starWars ], length: 1} );
    // const [name, setName] = React.useState(randomName);
    // const [count, setCount] = React.useState(0);
    // const handleClick = () => { 
    //     setName(randomName);
    //     setCount((prevCount) => prevCount + 1);
    // };
    // console.log('>>', count);
    const [state, setState] = React.useState<IStarsWarsNameFunctionState>( { name: randomName(), count: 0} );
    const handleClick = () => {
        setState((prevState) => ({ ...prevState, name: randomName()}));
        setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));

    };
    console.log('>>', state.count);
    return (
        <section className={styles.container}>
            <span className={styles.name}>{state.name}</span>
            <div></div>
            <button className={styles.btn} onClick={handleClick}>Мне нужно имя!</button>
        </section>
    )
}
