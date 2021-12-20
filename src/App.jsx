/* eslint no-eval: 0 */
import React from 'react'
import words from 'lodash.words'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import Result from './components/Result'
import './App.css'
import { useState } from 'react'



const App = () => {

  const [valueTexto, setValueTexto] = useState(" ");


  const items = words(valueTexto, /[^-^+^*^/]+/g)
  const value = items.length > 0 ? items[items.length - 1] : "0";
  console.log(items);

  return (
    <main className='react-calculator'>
      <h1>Calculadora</h1>
      <Result value={value} />
      <Numbers
        onClickNumber={number => {
          console.log("numero", number)
          setValueTexto(`${valueTexto}${number}`)
        }}

      />
      <Functions
        onContentClear={() => {
          console.log("clear")
          setValueTexto(" ")
        }}
        onDelete={() => {
          if (valueTexto.length > 0) {
            const newValueText = valueTexto.substring(0, valueTexto.length - 1)
            console.log(newValueText)
            setValueTexto(newValueText)
          }

        }}
      />
      <MathOperations
        onClickOperation={operation => {
          setValueTexto(`${valueTexto}${operation}`)
        }}
        onClickEqual={() =>
          setValueTexto(eval(valueTexto).toString())

        }
      />
    </main>)
}

export default App

