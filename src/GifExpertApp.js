import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The Walking Dead']);
   /*  const [input, setInput] = useState(); 

      const handleAdd= () => {
        setCategories([...categories, input]);
    };  */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>
            {/* <input onChange={ e => setInput(e.target.value)} /> */}
           {/*  <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                { 
                    categories.map( category => 
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    )
                }
            </ol>

        </>
    )}; 
