import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from './models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';


function App() {
  const [activities, setActivities] = useState<Activity[]>([]); //activities initial state TO --> the type of an empty Activity array
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined); //selectedActivity can either be an Activity or undefined via union type
  const [editmode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {                               //Response will contain data obj
        setActivities(response.data)                    // Set response data ( of type Activity[] ) TO --> activities state
      })
  }, []) // empty array of [ dependencies ] for the execution of useEffect() to happen exactly once

  function handleSelectActivity(id: string) { // Match activity object with parameter passed in & return true  
    setSelectedActivity(activities.find(a => a.id === id))       // `a` is an alias for each activity in the array
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);     //if editing activityu and hit cancel, will go back to the activity details open
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id ? setActivities([...activities.filter(a => a.id !== activity.id), activity])
      : setActivities([...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity (id: string) {
    setActivities([...activities.filter(a => a.id !== id)]);
  }

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}   //Pass the selectedActivity useState down to ActivityDashboard
          selectActivity={handleSelectActivity}   //SelectActivity function is equal to handleSelectActivity
          cancelSelectActivity={handleCancelSelectActivity}
          editmode={editmode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit = {handleCreateOrEditActivity}
          deleteActivity = {handleDeleteActivity}
        /> {/* Pass activities state as a prop to ActivityDashboard */}
      </Container>
    </>

  )
}

export default App
