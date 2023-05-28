
import {Box, Typography,styled} from '@mui/material';

const Container =styled(Box)(({ theme})=>({
background:'#f44336',
color: '#FFFFFF',
display:'flex',
alignItem:' center',
height:48,
marginBottom:30,
borderRadius:5,
[theme.breakpoints.down('md')]:{
display:'none'
}
  
}));

const Image =styled('img')({
  height:30,
  margin :'auto', 
  '&:last-child':{
    margin:'auto 50px auto 20px'    
  }
})

const Text = styled(Typography)`
font-size:14px;
font-weight:300;

margin:auto;
`

const InfoHeader = () =>{
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return  (
<Container>
   <Text>
    For the best experience use Inshorts app on your smartphone
   </Text>

<Box style={{display:'flex',marginleft:'auto'}}>
<Image src={appleStore} alt="appleStore"/>
<Image src={googleStore} alt="googleStore"/>
</Box>
</Container>
    )
}
export default InfoHeader; 