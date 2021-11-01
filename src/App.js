import React, { useState } from 'react'

import styled from 'styled-components'

const AppStyled = styled.div`
padding: 1em;
`
const Title     = styled.h1`
text-align: center;
margin-bottom: 3em;
`
const Label     = styled.label`
font-size: 1em;
line-height: 1em;
display: block;
margin-bottom: 1em;
`
const Input     = styled.input`
font-size: 1em;
line-height: 1em;
padding: .5em;
outline: none;
border: 1px solid #dddddd;
border-radius: .2em;

&:focus {
  border-color: #aaaaaa;
}
`

const WeightResult       = styled.div`
margin-top: .5em;
`
const WeightResultParagraph = styled.p``
function App() {

  const [ weightOnMars, setWeightOnMars ]       = useState(null)

  const calculateWeight = (x, y) => {
    let mass   = x / 9.807
    let result = mass * y

    return result
  }

  const handleInputChange = e => {
    const currentValue        = e.target.value
    const weightOnEarth       = parseInt(currentValue)
    const weightOnMars        = calculateWeight(weightOnEarth, 3.721)
    setWeightOnMars(weightOnMars)

  }

  console.log(weightOnMars)

  return (
    <AppStyled>
      <Title>Your Weight On Mars</Title>
      <form>
        <Label>Enter your weight on earth</Label>
        <Input type="text" placeholder="Your Weight Here" onChange={handleInputChange}/>
      </form>
      <WeightResult>
        <WeightResultParagraph>Your Weight On Mars is: {weightOnMars}</WeightResultParagraph>
      </WeightResult>

    </AppStyled>
  )
}

export default App
