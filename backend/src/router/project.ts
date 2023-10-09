import express from 'express';

import { isAuthenticated, isOwner } from '../middlewares';
import { CreateProjectMethod, GetProject, deleteProjectMethod, getAllProjects, updateProjectMethod } from '../controllers/project';

export default (router: express.Router) => {
    router.post('/project', CreateProjectMethod);
    router.get('/project', getAllProjects);    
    router.get('/project/:id', GetProject);
    router.patch('/project/:id', updateProjectMethod);
    router.delete('/project/:id',  deleteProjectMethod);
};