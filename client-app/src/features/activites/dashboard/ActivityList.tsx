import React from 'react';
import { Activity } from '../../../app/layout/models/activity';
import { Button, Container, Divider, FormGroup, Grid, GridColumn, Header, Item, Placeholder, Segment, StepContent } from 'semantic-ui-react';
import PurposeImage from './PurposeImage';
import TournamentImage from './TournamentImage';
import GivingImage from '../../GivingImage';
import Logo from './Logo';

interface Props {
    activities: Activity[];

}


export default function ActivityList({ activities }: Props) {
    return (
        <Container fluid>
            <Segment basic padded='very' vertical>
                <Grid relaxed column={3} celled='internally' stackable middle centered>
                    <Grid.Row width={100} stretched >

                        <Grid.Column width={5} style={{}}>
                            <text style={{ fontSize: '2.7em', fontFamily: 'Lucida Handwriting', paddingRight: '6em' }}> Tournament </text>
                            <TournamentImage ></TournamentImage>
                            <text style={{ fontSize: '17px', fontWeight: 'bold', fontFamily: 'Lucida Handwriting', textAlign: 'left', paddingBottom: '0em', paddingTop: '2em' }}>Information & Registration</text>
                            <text style={{ fontSize: '1em', textAlign: 'left', paddingTop: '0em' }}>
                                Got your squad together? Register here!
                                Rules and requirements for the annual ATTM Tournament!
                                Don't have a full roster or are you searching for a team with an open roster spot ? Let the community know on our Facebook page!
                            </text>
                        </Grid.Column>
                        <Grid.Column width={6} style={{}}>
                            <Header as='h1' style={{ fontSize: '3em', fontFamily: 'Lucida Handwriting', paddingLeft: '2.5em' }}> Purpose </Header>
                            <PurposeImage />
                            <p style={{ fontSize: '17px', fontWeight: 'bold', fontFamily: 'Lucida Handwriting', textAlign: 'left', paddingTop: '2em' }}>ARDS Awareness</p>
                            <p style={{ fontSize: '1em', textAlign: 'justify', paddingTop: '0em' }}>
                                Establishing the ATTM foundation serves to unite efforts to combat Acute Respiratory Distress Syndrome,
                                a life-threatening condition that poses significant challenges to patients and their families.
                                The foundation aims to raise public awareness about ARDS,
                                promote education among healthcare professionals and the public,
                                and provide a support network for affected individuals.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ paddingRight: '0em' }}>
                            <Header as='h1' style={{ fontSize: '3em', fontFamily: 'Lucida Handwriting', paddingLeft: '1.75em' }}> Giving </Header>
                            <GivingImage></GivingImage>
                            <p style={{ fontSize: '17px', fontWeight: 'bold', fontFamily: 'Lucida Handwriting', padding: '.8em 1.2em' }}>Sponsorships & Donations</p>
                            <p style={{ fontSize: '1.1em', fontFamily: 'Helvetica', fontWeight: 'lighter', marginLeft: '1.5em', paddingTop: '0em' }}>
                                Make a difference and contribute to future victims & research!
                                All proceeds collected are devoted to future victims, research, & funding the tournament.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Container>
                <Segment vertical raised>
                    <Grid>
                <Grid.Row stretched as='text' style={{ fontSize: '3em', fontFamily: 'Lucida Handwriting', marginRight:'2em'}}> Andrew & His Legacy </Grid.Row>
                <p style={{ fontSize: '1em', textAlign: 'left', paddingTop: '2.5em' }}>

                    Establishing the ATTM foundation serves to unite efforts to combat Acute Respiratory Distress Syndrome,
                    a life-threatening condition that poses significant challenges to patients and their families.
                    The foundation aims to raise public awareness about ARDS,
                    promote education among healthcare professionals and the public,
                    and provide a support network for affected individuals.
                </p>
                </Grid>
                </Segment>
            </Container>
        </Container>
    )
}