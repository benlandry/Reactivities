import React from 'react';
import { Activity } from '../../../app/layout/models/activity';
import { Button, Grid, GridColumn, Header, Item, Segment } from 'semantic-ui-react';
import PurposeImage from './PurposeImage';
import TournamentImage from './TournamentImage';
import GivingImage from '../../GivingImage';

interface Props {
    activities: Activity[];
}

export default function ActivityList({ activities }: Props) {
    return (
        <Segment style={{ padding: '6em 0em'}} vertical>
            <Grid celled='internally' columns={'equal'} stackable middle >
                <Grid.Row>
                    <Grid.Column width={5} style={{padding:'1em', paddingRight:'2em'}}>
                        <Header as='h1' style={{ fontSize: '3em', fontFamily: 'sans-serif', padding: '0em 1.55em' }}> Purpose </Header>
                        <PurposeImage />
                        <p style={{ fontSize: '1.5em', fontWeight: 'bold', fontFamily: 'sans-serif' }}>ARDS Awareness</p>
                        <p style={{ fontSize: '1.05em', marginRight:'2em' }}>
                            Establishing the ATTM foundation serves to unite efforts to combat Acute Respiratory Distress Syndrome,
                            a life-threatening condition that poses significant challenges to patients and their families.
                            The foundation aims to raise public awareness about ARDS,
                            promote education among healthcare professionals and the public,
                            and provide a support network for affected individuals.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={5} style={{padding:'1em'}}>
                        <Header as='h1' style={{ fontSize: '3em',  fontFamily: 'sans-serif', padding: '0em 1em' }}> Tournament </Header>
                        <TournamentImage />
                        <p style={{ fontSize: '1.5em', fontWeight: 'bold', fontFamily: 'sans-serif', padding: '0em 1.30em' }}>Information & Registration</p>
                        <p style={{ fontSize: '1.1em', marginLeft: '1em', padding:'1em' }}>
                            Got your squad together? Register here! 
                            Rules and requirements for the annual ATTM Tournament!
                            Don't have a full roster or are you searching for a team with an open roster spot ? Let the community know on our Facebook page!
                        </p>
                    </Grid.Column>
                    <Grid.Column width={5} style={{padding:'1em'}}>
                        <Header as='h1' style={{ fontSize: '3em', fontFamily: 'sans-serif', padding: '0em 2.7em'}}> Giving </Header>
                        <GivingImage/>
                        <p style={{ fontSize: '1.5em', fontWeight: 'bolder', fontFamily: 'sans-serif', padding: '0em 1.2em' }}>Sponsorships & Donations</p>
                        <p style={{ fontSize: '1.1em', marginLeft: '1em', fontWeight:'lighter',  padding: '1em'}}>
                        Looking to make a difference & contribute towards  bigger picture?
                         All proceeds collected are devoted to future victims, research, & fund the tournament.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

    )
}