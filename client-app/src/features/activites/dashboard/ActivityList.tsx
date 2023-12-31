import React from 'react';
import { Activity } from '../../../app/layout/models/activity';
import { Button, Container, Grid, Header, Segment, SegmentGroup } from 'semantic-ui-react';
import PurposeImage from './PurposeImage';
import TournamentImage from './TournamentImage';
import GivingImage from '../../GivingImage';
import Logo from './Logo';

interface Props {
    activities: Activity[];

}



function newFunction(): { MediaContextProvider: any; Media: any; } {
    return createMedia({
        breakpoints: {
            mobile: 0,
            tablet: 768,
            computer: 1024,
        },
    });
}

export default function ActivityList({ activities }: Props) {
    return (
        
            <Container fluid>
                <Grid relaxed column={3} celled='internally' stackable middle centered>
                    <Grid.Row  relaxed  length={100} stretched >

                        <Grid.Column relaxed width={5} style={{}} stretched>
                            <Header as='h1' style={{ fontSize: '2.75em', fontFamily: 'Lucida Handwriting' }}> Tournament </Header>
                            <TournamentImage ></TournamentImage>
                            <text style={{ fontSize: '17px', fontWeight: 'bold', fontFamily: 'Lucida Handwriting', textAlign: 'left',  paddingTop: '1em' }}>Information & Registration</text>
                            <text style={{ fontSize: '1em', textAlign: 'justify', paddingTop: '0em' }}>
                                Got your squad together? Register here!
                                Rules and requirements for the annual ATTM Tournament!
                                Don't have a full roster or are you searching for a team with an open roster spot ? Let the community know on our Facebook page!
                            </text>
                        </Grid.Column>
                        <Grid.Column width={6} style={{}}>
                            <Header as='h1' style={{ fontSize: '3em', fontFamily: 'Lucida Handwriting', paddingLeft: '2.5em' }}> Purpose </Header>
                            <PurposeImage />
                            <p style={{ fontSize: '17px', fontWeight: 'bold', fontFamily: 'Lucida Handwriting', textAlign: 'left', paddingTop: '5em' }}>ARDS Awareness</p>
                            <p style={{ fontSize: '1em', textAlign:'justify'}}>
                                Establishing the ATTM foundation serves to unite efforts to combat Acute Respiratory Distress Syndrome,
                                a life-threatening condition that poses significant challenges to patients and their families.
                                The foundation aims to raise public awareness about ARDS,
                                promote education among healthcare professionals and the public,
                                and provide a support network for affected individuals.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header as='h1' style={{ fontSize: '3em', fontFamily: 'Lucida Handwriting', paddingLeft: '1.5em' }}> Giving </Header>
                            <GivingImage></GivingImage>
                            <p style={{ fontSize: '17px', fontWeight: 'bold', fontFamily: 'Lucida Handwriting'}}>Sponsorships & Donations</p>
                            <p style={{ fontSize: '1em', textAlign: 'justify'}}>
                                Make a difference and contribute to future victims & research!
                                All proceeds collected are devoted to future victims, research, & funding the tournament.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
           
            <Container fluid as='text'>
                <SegmentGroup vertical raised>
                    <Header style={{ fontSize: '3em', fontFamily: 'Lucida Handwriting', marginTop: '1em' }}> Andrew & His Legacy</Header>
                    <br>

                    </br>
                    <h1></h1>
                </SegmentGroup>
            </Container>
     </Container>   
    )
}

function createMedia(arg0: { breakpoints: { mobile: number; tablet: number; computer: number; }; }): { MediaContextProvider: any; Media: any; } {
    throw new Error('Function not implemented.');
}
