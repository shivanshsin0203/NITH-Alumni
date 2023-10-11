   import React, { useState } from 'react';
    import AppBar from '@mui/material/AppBar';
    import Button from '@mui/material/Button';
    import CameraIcon from '@mui/icons-material/PhotoCamera';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import CssBaseline from '@mui/material/CssBaseline';
    import Grid from '@mui/material/Grid';
    import Stack from '@mui/material/Stack';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    import Container from '@mui/material/Container';
    import Link from '@mui/material/Link';
    import { createTheme, ThemeProvider } from '@mui/material/styles';
    import Search from './search'
    import Data from './data'
    import InstagramIcon from '@mui/icons-material/Instagram';
    import GitHubIcon from '@mui/icons-material/GitHub';
    import LinkedInIcon from '@mui/icons-material/LinkedIn';
    import CodeIcon from '@mui/icons-material/Code';
    import SchoolIcon from '@mui/icons-material/School';
    import Brightness4Icon from '@mui/icons-material/Brightness4';
    import Brightness7Icon from '@mui/icons-material/Brightness7';
   function Copyright() {
       
        return (
        <Typography variant="body2" color="text.secondary" align="center">
        {' '}
        <Link color="inherit" href="https://mui.com/">
            
        </Link>{' '}
        <a href="https://github.com/shivanshsin0203" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ fontSize: 40, color: 'purple' }} />
        </a>
        <a href="https://www.instagram.com/shivanshsingh4378/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={{ fontSize: 40, color: '#E1306C' }} />
        </a>
        <a href="https://www.linkedin.com/in/shivansh-singh-736521289/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ fontSize: 40, color: 'lightblue' }} />
        </a>
        <a href="https://leetcode.com/singhshivansh12may/" target="_blank" rel="noopener noreferrer">
            <CodeIcon style={{ fontSize: 40, color: '#FFD700' }} />
        </a>
        {/* {new Date().getFullYear()}
        {'.'} */}
        </Typography>
    );
    }

    const cards = [];

    // TODO remove, this demo shouldn't need to reset the theme.
    const defaultTheme = createTheme();

    export default function Album() {
        const [darkMode, setDarkMode] = useState(true);

        const toggleDarkMode = () => {
          setDarkMode((prevMode) => !prevMode);
        };
      
        const theme = createTheme({
          palette: {
            mode: darkMode ? 'dark' : 'light',
          },
        });
        const [tag, settag] = useState("");
        const [col,setcol]=useState([]);
        const [data,setdata]=useState([]);
         function onSub(item)
        {
           function get(){
             return settag(item)
           }
           function add(){
            return setcol(Data);
           }
           function show(){
            cards.splice(0, cards.length);
            var s=""+item;
            for(var i=0;i<Data.length;i++)
            {
               if(Data[i].tag===s)
               {
                cards.push(Data[i]);
               }
            }
           }
           
           add();
           get();
           show();
           }
       
        return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            <SchoolIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
                NIT-H Alumni 
            </Typography>
            <div>
        <Button onClick={toggleDarkMode}>
          {darkMode ? <Brightness7Icon  /> : <Brightness4Icon style={{color:'red'}} />}
        </Button>
        {/* Your website content */}
      </div>
            </Toolbar>
        </AppBar>
        <main>
            {/* Hero unit */}
            <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
            >
            <Container maxWidth="sm">
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                </Typography>
             
                <Search onSubm={onSub} onView={onSub} />
                
            </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            {cards.length===0? <h2 style={{ textAlign: 'center', color:'lightblue' }}>
      No Data...
    </h2>:
            <Grid container spacing={4}>
                {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                    <CardMedia
                        component="div"
                        sx={{
                        // 16:9
                        pt: '56.25%',
                        }}
                        image={card.img}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                        </Typography>
                        <Typography>
                         {card.dic}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" component="a" href={card.linid}>View Linkedin Id</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>}
            </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
            Build By Shivansh 
            </Typography>
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
           Images of individual are taken from their linkedin id.
          
            </Typography>
            
            <Copyright />
        </Box>
        
        {/* End footer */}
        </ThemeProvider>
    );
    }