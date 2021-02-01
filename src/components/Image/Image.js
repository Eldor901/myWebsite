import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle, Grid,
    GridListTileBar,
} from "@material-ui/core";
import ReactPlayer from 'react-player'
import CloseIcon from '@material-ui/icons/Close';
import './image.css'

const Image = ({img, title, video, content}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div onClick={handleClickOpen} className={`pointer`}>
                <img src={img} alt={title} width='100%' />
                <GridListTileBar className={`h3`} title={title} />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='md'
            >

                <DialogTitle id="alert-dialog-title">
                    <h3>{title}</h3>
                    <CloseIcon className={`delete_icon pointer`} onClick={handleClose}/>
                </DialogTitle>
                <DialogContent>
                    { video ? <ReactPlayer width={'100%'} url={video} controls={true} playing={true}/>:
                        <img src={img} alt={title} width='100%'/>}
                        <h4>Description: </h4>
                        <div dangerouslySetInnerHTML={{__html: content }}>

                        </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Image;