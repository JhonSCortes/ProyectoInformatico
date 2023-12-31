import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { getAllProjects } from "../../../utils/axios";
import { Project } from "../../../interfaces/components";

interface CreateProjectComponentProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateProjectComponent: React.FC<CreateProjectComponentProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  
  const [, setProjects] = useState<Project[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    ownerId: "651f483e2afedc3b83cf39a6",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {      
      const BaseBackendURI = import.meta.env.VITE_BASE_API_URI;
      await axios.post(`${BaseBackendURI}/project`, formData);
      alert("Proyecto creado con éxito.");

      setIsModalOpen(false);
      const data = await getAllProjects();
      if (data) {
        console.log(data);
        setProjects(data);
      }
    } catch (error) {
      alert("Error al crear el proyecto.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "15px",
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Crear Proyecto
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Project Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleFormChange}
            />
            {/* <TextField
              label="Owner ID"
              variant="outlined"
              fullWidth
              margin="normal"
              name="ownerId"
              value={formData.ownerId}
              onChange={handleFormChange}
            /> */}
            {/* 
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                type="date" 
                name="startDate"
                value={formData.startDate}
                onChange={handleFormChange}
              />
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                type="date" 
                name="endDate"
                value={formData.endDate}
                onChange={handleFormChange}
              /> */}
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
          </form>
        </Box>
      </Modal>

      <></>
    </>
  );
};

export default CreateProjectComponent;
