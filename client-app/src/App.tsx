import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';


function App() {
  const [activities, setActivities] = useState([]); //Request sends to API to get data and store it in activities state

  useEffect( () => {
    axios.get('http://localhost:5000/api/activities')
    .then(response => {                               //Response contains data obj. that is used to setActivities
      setActivities(response.data)
    })
  }, []) //empty array[dependencies] allows for the code execution inside of useEffect() to happen exactly once


    return (
      <div>
        <Header as='h2' icon={'users'} content='Reactivities'/>
        <List>
          {activities.map(( activity : any ) => (
            <List.Item key={ activity.id }>
              {activity.title}
            </List.Item>
          ))}
        </List>
      </div>
    
  )
}

export default App
