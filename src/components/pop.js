import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


import SurveyComponent from './survey';

export default function DialogSelect() {

  const [open, setOpen] = React.useState(false);

  // const Questions = {
  //     adult : [["Men","Women","Coed"],["26-U","40-U","50-U","60-U","70-U"],["A","AA","AAA","Novice","Masters"]],
  //     "junior": [["U-13","U-14","U-15","U-16","U-17"],["Bronze","Silver","Gold","Hogh School","Club"]]
  // }

  const handleClickOpen = () => {
    setOpen(true);
  };

   const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color="secondary" style={{padding:"10px 70px",top:"50%", left:"45%", position :"absolute"}}>Open</Button>
      <Dialog enablebackdropclick="true" disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>
              <SurveyComponent/>
        </DialogContent>
        <DialogActions>
                <Button onClick={handleClose} variant="contained">
                      Close
                </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
