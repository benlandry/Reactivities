import React from 'react';
import { Container, Grid, List, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/layout/models/activity';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
    return (
        <Container fluid divided='vertically'>
            <Segment vertical>
                <ActivityList activities={[]}/>
            </Segment>
        </Container>
    )
}