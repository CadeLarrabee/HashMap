// Import necessary functions and classes
import { Project } from "./projectModule.js";
import { Task } from "./taskModule.js";

export class StorageHandler {
  // Function to save projects and tasks to local storage

  saveToLocalStorage(project) {
    let projectsData = localStorage.getItem("projects");
    if (!projectsData) {
      projectsData = {};
    } else {
      projectsData = JSON.parse(projectsData);
    }

    // Serialize tasks before saving
    const serializedTasks = project.tasks.map((task) => ({
      id: task.id,
      name: task.name,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
    }));

    // Add serialized tasks to the project object
    const serializedProject = {
      id: project.id,
      name: project.name,
      description: project.description,
      dueDate: project.dueDate,
      priority: project.priority,
      tasks: serializedTasks, // Save serialized tasks
    };

    projectsData[project.projectId] = serializedProject;

    localStorage.setItem("projects", JSON.stringify(projectsData));
  }

  // Function to retrieve projects and tasks from local storage
  loadFromLocalStorage() {
    const projectsData = localStorage.getItem("projects");
    if (projectsData) {
      const projects = JSON.parse(projectsData);
      if (projects) {
        const projectObjects = Object.values(projects).map((project) => {
          const tasks = project.tasks.map((taskData) => {
            return new Task(
              taskData.id,
              taskData.name,
              taskData.description,
              new Date(taskData.dueDate),
              taskData.priority,
              project
            );
          });
          return new Project(
            project.id,
            project.name,
            project.description,
            new Date(project.dueDate),
            project.priority,
            tasks
          );
        });
        return projectObjects;
      } else {
        console.error("Projects data in local storage is invalid");
        return [];
      }
    }
  }

  removeProjectFromLocalStorage(projectId) {
    // Retrieve projects data from local storage
    let projectsData = localStorage.getItem("projects");

    if (projectsData) {
      // parse the json data so we have real data
      projectsData = JSON.parse(projectsData);

      delete projectsData[projectId];

      // Update data in local storage
      localStorage.setItem("projects", JSON.stringify(projectsData));
    }
  }

  removeTaskFromLocalStorage(taskId) {
    let projectsData = localStorage.getItem("projects");
    if (projectsData) {
      projectsData = JSON.parse(projectsData);

      // Remove project with the specified id from the object
      const taskIndex = project.tasks.findIndex(
        (task) => task.taskId === taskId
      );
      //index returns -1 if not found
      if (taskIndex !== -1) {
        //remove using splice because we don't want orphan our tasks
        tasks.splice(taskIndex, 1);
      }

      // Update data in local storage
      localStorage.setItem("projects", JSON.stringify(projectsData));
    }
  }
}
