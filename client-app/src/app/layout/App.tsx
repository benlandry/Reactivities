import { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Divider, Header, List } from 'semantic-ui-react';
import { Activity } from './models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activites/dashboard/ActivityDashboard';
import Logo from '../../features/activites/dashboard/Logo';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  return (
    <Container>
      <NavBar />
      <Header as='h4'
        color='black'
        textAlign='center'
        content='ATTM Foundation'
        style={{ marginTop: '1.75em', fontSize: '4em'}} />
      <Logo />
      <Container>
        <Header
          as='h1'
          color='black'
          content='1 Corinthians 13' textAlign='center' style={{ marginTop: '2em', fontSize: '1.75em' }}
        />
        <Divider style={{ marginTop: '6em' }} color='black'></Divider>
      </Container>
      <Container color='grey' style={{ marginTop: '1em' }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Container>
  )
}

export default App
