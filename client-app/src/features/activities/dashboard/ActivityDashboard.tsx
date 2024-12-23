import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/layout/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[]; // Define the type of the activities prop
    selectedActivity: Activity | undefined; // Define the type of the selectedActivity prop
    selectActivity: (id: string) => void; // Define the type of the selectActivity prop 
    cancelSelectActivity: () => void; // Define the type of the cancelSelectActivity prop
    editmode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({ activities, selectedActivity, selectActivity,
    cancelSelectActivity, editmode, openForm, closeForm, createOrEdit, deleteActivity }: Props) {       // Destructure the activities prop from the Props interface and define its type
    return (
        <Grid>
            <Grid.Column width='10'> {/* 10 columns wide */}
                <ActivityList activities={activities} selectActivity={selectActivity} 
                deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editmode &&
                    <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}
                    />}

                {editmode && 
                <ActivityForm closeForm = {closeForm} activity = {selectedActivity} createOrEdit = {createOrEdit}/>}
            </Grid.Column>
        </Grid>
    )
}