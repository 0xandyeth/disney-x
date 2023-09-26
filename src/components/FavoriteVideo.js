import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FavoriteVideo =(props)=>{
 return(
    <Container>
        <h3>Recommend to you</h3>
        <Content>
         <Wrap>
            {/** <Link to={`/detail` + movie.id}> */}
           <Link to="/">
             <img src='/images/slider-badag.jpg' alt=''/>
           </Link>
         </Wrap>
         <Wrap>
            {/** <Link to={`/detail` + movie.id}> */}
           <Link to="/">
             <img src='/images/slider-badag.jpg' alt=''/>
           </Link>
         </Wrap>
         <Wrap>
            {/** <Link to={`/detail` + movie.id}> */}
           <Link to="/">
             <img src='/images/slider-badag.jpg' alt=''/>
           </Link>
         </Wrap>
         <Wrap>
            {/** <Link to={`/detail` + movie.id}> */}
           <Link to="/">
             <img src='/images/slider-badag.jpg' alt=''/>
           </Link>
         </Wrap>
  
        </Content>
    </Container>
 )
};

const Container = styled.div`
 padding:0 0 25px;
`
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0,1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
const Wrap = styled.div`

padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    top:0;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }
  &:hover{
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249,249,249,0.8);
  }
`


export default FavoriteVideo;
