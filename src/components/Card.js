import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ActionAreaCard({ blogData }) {
  const { title, description } = blogData;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=" rounded-lg bg-purple-900">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you wanna delete this blog?
          </Typography>
          <Typography
            id="modal-modal-description"
            className=" text-xl font-bold"
            sx={{ mt: 2 }}
          >
            {title}
          </Typography>
          <div className="mt-4 flex items-center justify-between">
            <Button className=" bg-red-500 text-white" onClick={() => {}}>
              Yes
            </Button>
            <Button className=" bg-black text-white" onClick={handleClose}>
              No
            </Button>
          </div>
        </Box>
      </Modal>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://c8.alamy.com/comp/TBRC1W/data-science-artificial-intelligence-concept-futuristic-supercomputer-background-TBRC1W.jpg"
            alt="img"
          />
          <CardContent>
            <div className=" flex items-center justify-between">
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <IconButton
                aria-label="delete"
                color="warning"
                className=" -mt-2 z-10"
                onClick={() => {
                  handleOpen();
                }}
              >
                <DeleteIcon className=" text-red-500" />
              </IconButton>
            </div>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
