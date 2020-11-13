import React from 'react';
import './index.scss'
import Card from './card'

const index = () => {
    return (
        <div className='index-view'>
                  <Card 
                img="group-shot.JPG" 
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price=''
                dimensions=''
                description='Its santas sligh with toys in it'
                />
            <Card 
                img="Santa-sleig.JPG" 
                height="285px" 
                width="260px"
                altName='Santas sleigh'
                price='$120'
                dimensions='H 33in x W 33in'
                description='Santa&#39;s sleigh w/ Bag of toys'
                />
            <Card 
                img="Caroling-Santa.JPG" 
                height="285px" 
                width="260px"
                altName='Caroling Santa'
                price='$70'
                dimensions='H 60in x W 35in'
                description='Caroling Santa w/ 2 Reindeer'
                />
      
                <Card 
                img="Joy.JPG" 
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price='$130'
                dimensions='H 34in x W 46in'
                description='The word JOY w/ raised shadow depiction of the nativity'
                />
                 <Card 
                img="Raindeer-list.JPG" 
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price='$65'
                dimensions='H 34in x W 41in'
                description='Raindeer holding Santa&#39;s list for toys.'
                />
                 <Card 
                img="raindeer-wish.JPG" 
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price='$65'
                dimensions='H 34in x W 41in'
                description='Raindeer holding Merry Christmas sign.'
                />
                 <Card 
                img="Santa-countDown.JPG" 
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price='$30'
                dimensions='H 37in x W 16in   Stand 8in x 12in'
                description='Santa holding a chalkboard Christmas countdown sign. He is crafted from 1/2in Pinewood'
                />
                <Card 
                img="Santa-wreef.JPG" 
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price='$110'
                dimensions='10ft X 10ft'
                description='Santa wearing a wreath'
                />
                <Card 
                img="Stain-glass.png" 
                height="390px" 
                width="250px"
                altName='Santas slegh'
                price='$110'
                dimensions='H 60in x W 55in'
                description='depiction of the nativity painted as stained glass'
                />
                <Card 
                img="tangeled-elves.JPG" 
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price='$65'
                dimensions='H 56in x W 30in'
                description='Its santas sligh with toys in it'
                />
                <Card 
                img="tangled-snowmen.JPG" 
                height="285px" 
                width="260px"
                altName='Santas slegh'
                price='$65'
                dimensions='H 56in x W 30in'
                description='Its santas sligh with toys in it'
                />
                <Card 
                img="Young-nativaty.png" 
                height="290px" 
                width="290px"
                altName='Santas slegh'
                price='$100'
                dimensions='10ft X 10ft'
                description='Its santas sligh with toys in it'
                />
        </div>
    );
}

export default index;
