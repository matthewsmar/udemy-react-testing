import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Alert from 'react-bootstrap/Alert'


export interface IAppProps {
  start: number
}

const App: React.FC<IAppProps> = ({ start = 0 }) => {
  const [count, setCount] = useState(start)
  const [showAlert, setShowAlert] = useState(false)

  const handleIncrementClick = (event: React.MouseEvent) => {
    setShowAlert(false)
    setCount(count + 1)
  }

  const handleDecrementClick = (event: React.MouseEvent) => {
    if (count > 0) {
      setShowAlert(false)
      setCount(count - 1)
    } else {
      setShowAlert(true)
    }
  }

  let alert = null;
  if (showAlert) {
    alert = <Alert data-test='alert-error' className={'hidden'} variant='danger'>Cannot increment less than 0</Alert>
  }

  return (
    <Container>
      <div data-test="component-app">
        <Row>
          <Jumbotron>
            <h1 data-test='counter-display'>
              The counter is currently&nbsp;<span data-test='count'>{count}</span>
            </h1>
          </Jumbotron>
        </Row>
        <Row>
          {alert}
        </Row>
        <Row>
          <Button
            variant="outline-primary"
            data-test='increment-button'
            onClick={handleIncrementClick}
          >Increment counter
          </Button>&nbsp;
          <Button
            variant="outline-primary"
            data-test='decrement-button'
            onClick={handleDecrementClick}
          >Decrement counter
          </Button>
        </Row>
      </div>
    </Container>
  )
}

export default App
