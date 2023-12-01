import React from 'react';
import './index.scss'
import Card from './card'

const index = () => {
 
    return (
        <div className='index-view'>
            <Card 
                img="group-shot.JPG" 
                height="285px" 
                width="350px"
                altName='Santas slegh'
                price=''
                dimensions=''
                description='Its santas sligh with toys in it'
                />
            <Card 
                img="Santa-sleig.JPG" 
                name='Santa&#39;s sleigh'
                height="285px" 
                width="260px"
                altName='Santas sleigh'
                price='$120'
                dimensions='H 33in x W 33in'
                description='Santa&#39;s sleigh w/ Bag of toys'
                />
            <Card 
                img="Caroling-Santa.JPG"
                name='Caroling Santa'
                height="285px" 
                width="260px"
                altName='Caroling Santa'
                price='$70'
                dimensions='H 60in x W 35in'
                description='Caroling Santa w/ 2 Reindeer'
                />
      
                <Card 
                img="joy.jpeg" 
                name='Joy'
                height="205px" 
                width="300px"
                altName='Santas slegh'
                price='$160'
                dimensions='H 34in x W 46in'
                description='The word JOY w/ raised shadow depiction of the nativity'
                />
                 <Card 
                img="Raindeer-list.JPG" 
                name='Raindeer w/Santa&#39;s list'
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price='$50'
                dimensions='H 34in x W 41in'
                description='Raindeer holding Santa&#39;s list for toys.'
                />
                 <Card 
                img="raindeer-wish.JPG" 
                name='Raindeer Marry Christmas'
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price='$65'
                dimensions='H 34in x W 41in'
                description='Raindeer holding Merry Christmas sign.'
                />
                 <Card 
                img="Santa-countDown.JPG" 
                name='Santa Countdown'
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price='$30'
                dimensions='H 37in x W 16in Stand 8in x 12in'
                description='Santa holding a chalkboard Christmas countdown sign. He is crafted from 1/2in Pinewood'
                />
                <Card 
                img="Santa-wreef.JPG" 
                name='Santa wreath'
                height="285px" 
                width="260px"
                altName='Santas wreath'
                price='$110'
                dimensions='10ft X 10ft'
                description='Santa wearing a wreath'
                />
                <Card 
                img="Stain-glass.png" 
                name='Stained Glass'
                height="390px" 
                width="250px"
                altName='Santas slegh'
                price='$110'
                dimensions='H 60in x W 55in'
                description='depiction of the nativity painted as stained glass'
                />
                <Card 
                img="tangeled-elves.jpeg" 
                name='Tangled Elves'
                height="350px" 
                width="260px"
                altName='Santas slegh'
                price='$65'
                dimensions='H 56in x W 30in'
                description='Elves Standing on each others head putting up Christmas lights 
                &#39;included&#39;'
                />
                <Card 
                img="tangled-snowman.jpeg" 
                name='Tangled Snowman'
                height="350px" 
                width="260px"
                altName='Santas slegh'
                price='$65'
                dimensions='H 56in x W 30in'
                description='Snowmen Standing on each others head putting up Christmas lights 
                &#39;included&#39;'
                />
                <Card 
                img="young-nativaty.png" 
                name='Young Nativity'
                height="250px" 
                width="300px"
                altName='Young nativity'
                price='$100'
                dimensions='10ft X 10ft'
                description='child depiction of the nativity'
                />
                <Card 
                img="CandyCanes.png" 
                name='Candy canes'
                height="250px" 
                width="300px"
                altName='Candy canes'
                price=''
                dimensions=''
                description='large candy canes with green bow for your holiday decorations'
                />
                 <Card 
                img="Santa'sPuzzleTrain.png" 
                name="Santa\'s Puzzle Train"
                height="250px" 
                width="300px"
                altName="Santa\'s Puzzle Train"
                price=''
                dimensions=''
                description='Santa holiday train cut into puzzle pieces with easy assembly. Hand painted and ready for your front yard.'
                />
                 <Card 
                img="SantaSleigh.png" 
                name="Santa\'s Sleigh"
                height="250px" 
                width="300px"
                altName="Santa\'s Puzzle Sleigh"
                price=''
                dimensions=''
                description="Santa\'s Puzzle Sleigh Matches the style of the puzzle Train. Grab both pieces for the full set!"
                />
           
               <Card 
                img="ReindeerCarolingWithSanta.png" 
                name="Reindeer Caroling With Santa"
                height="250px" 
                width="300px"
                altName="Reindeer Caroling With Santa"
                price=''
                dimensions=''
                description="Two Reindeer Caroling With Santa"
                />
                <Card 
                img="ReindeerStandingOnSanta.png" 
                name="Reindeer Standing On Santa"
                height="250px" 
                width="300px"
                altName="Reindeer Standing On Santa"
                price=''
                dimensions=''
                description="Reindeer Standing On Santa with Big Puppy Dog Eyes"
                />
        </div>
    );
}

export default index;
