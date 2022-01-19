import React , { useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CardImageWrapper,
  CarImage,
} from './styles';

interface Props{
    imagesUrl: string[];
}

interface ChangeImageProps{
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlide({imagesUrl} : Props) {
  

  return (
      <Container>
        <ImageIndexes> 
        <ImageIndex active={true}/>
        <ImageIndex active={false}/>
        <ImageIndex active={false}/>
          {
            imagesUrl.map((item, index) => {
              console.log(item);
              console.log(index);
              <ImageIndex
              key={index}
                active={true}
              />
            })
          }  
        
        </ImageIndexes>

          <FlatList
            data={imagesUrl}
            keyExtractor={key => key}
            renderItem={({item}) => (
              <CardImageWrapper>
                <CarImage
                  source={{uri: item}}
                  resizeMode='contain'
                />
              </CardImageWrapper> 
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
           
          />
      </Container>
    
  );
}