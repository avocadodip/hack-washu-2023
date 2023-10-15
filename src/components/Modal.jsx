import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Grid from '@mui/material/Grid';
import PublicIcon from '@mui/icons-material/Public';
import "../App.css";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Modal() {
    const [open, setOpen] = React.useState(true);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    
    return (
      <div>

    <IconButton
        size="large"
        aria-label="help"
        color="inherit"
        sx={{ mx: 1 }}
        onClick={handleClickOpen}
      >
        <HelpOutlineIcon />
      </IconButton>
        
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >

<Grid container alignItems="center" sx={{py:1}}>
      <Grid item sx={{ ml: 2}}>
        <PublicIcon  color="inherit" sx={{ mt: 0.5 }} />
      </Grid>
      <Grid item>
        <DialogTitle className="bolder-blue" sx={{ mt: 0, p: 0.5 }} id="customized-dialog-title">
          BLDR
        </DialogTitle>
      </Grid>
      <Grid className="blue" item sx={{ marginLeft: 'auto', mr: 2}}>
        <IconButton
          aria-label="close"
          onClick={handleClose}

        >
  <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
          
          
          <DialogContent dividers>
            <Typography gutterBottom sx={{mb:3}}> 
              Welcome to <span className="blue">Wrld Bldr</span>! Use AI to generate custom 3D worlds.
            </Typography>

            <Typography gutterBottom sx={{mb:3}} >
            <span className="blue">Explore using mouse/trackpad and arrow keys.</span>
            </Typography>
            <Typography gutterBottom sx={{mb:3}}>
              Try these prompts out!
               forest,
                        pyramid,
                        checkerboard,
                      goaland,
                       yavapai,
                         goldmine,
                      arches,
                      threetowers,
                       poison,
                        tron,
                      japan,
                      dream,
                       volcano,
                        starry,
                        osiris
            </Typography>
            <Typography gutterBottom >
              Happy creating, enjoy!
            </Typography>
            
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Got it!
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    );
  }