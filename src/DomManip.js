import { format } from "date-fns";
import { Task } from "./taskModule.js";
import { Project } from "./projectModule.js";
import Checkmark from "./images/Checkmark.png";
import { StorageHandler } from "./localStorageHandler.js";
//
//Controls the dom for the project
//
export class DomController {
  constructor() {
    this.storageHandler = new StorageHandler();
  }
  //
  //Handle the setup of the page pre-project injection
  //
  GenerateDomStructure(defaultProj) {
    const mainProjPanelWrapper = document.createElement("div");
    mainProjPanelWrapper.classList.add("mainWrapper");
    document.body.appendChild(mainProjPanelWrapper);

    const loadedProjs = this.storageHandler.loadFromLocalStorage();

    this.GenerateNavPanel(mainProjPanelWrapper, loadedProjs);
    this.GenerateBodyPanel(mainProjPanelWrapper);
    this.GenerateTodayPanel(loadedProjs);
  }

  GenerateNavPanel(mainWrapper, loadedProjs) {
    //
    // Handle the generation of the nav panel and all its components.
    //
    const navPanelWrapper = document.createElement("div");
    navPanelWrapper.classList.add("nav");
    navPanelWrapper.classList.add("navWrapper");

    //Title and time panel

    const navPanelMainTitle = document.createElement("div");
    navPanelMainTitle.classList.add("navTitle", "navItem");
    navPanelMainTitle.textContent = "Today";
    navPanelWrapper.appendChild(navPanelMainTitle);

    navPanelMainTitle.addEventListener("click", () =>
      this.GenerateTodayPanel(loadedProjs)
    );

    // const navPanelMainDate = document.createElement("div");
    // navPanelMainDate.classList.add("navDate", "navItem");

    // const currentDate = new Date();
    // const formattedDate = format(currentDate, "yyyy-MM-dd");
    // navPanelMainDate.textContent = formattedDate;
    //navPanelMainTitle.appendChild(navPanelMainDate);

    //Project panels

    const navNewProjectPanelWrapper = document.createElement("div");
    navNewProjectPanelWrapper.classList.add(
      "navNewProjectPanelWrapper",
      "navItem"
    );
    navNewProjectPanelWrapper.textContent = "Add New Project";
    //this.GenerateAddButton(navNewProjectPanelWrapper);
    navNewProjectPanelWrapper.addEventListener("click", () =>
      this.GenerateAddForm(mainWrapper)
    );

    navPanelWrapper.appendChild(navNewProjectPanelWrapper);

    const navProjectPanelWrapper = document.createElement("div");
    navProjectPanelWrapper.classList.add("NavProjPanelWrapper");
    navPanelWrapper.appendChild(navProjectPanelWrapper);

    //Options panel > includes help and settings

    const navOptionsWrapper = document.createElement("div");
    navOptionsWrapper.classList.add("optionsWrapper");

    //Generate the setting banner in the nav bar

    const navSettingsWrapper = document.createElement("div");
    navSettingsWrapper.classList.add("navItem");

    const navSettings = document.createElement("div");
    navSettings.textContent = "Settings";
    navSettingsWrapper.appendChild(navSettings);

    const navSettingsIcon = document.createElement("img");
    navSettingsIcon.src = "";
    navSettingsIcon.classList.add("navIcon");
    navSettingsWrapper.appendChild(navSettingsIcon);

    navOptionsWrapper.appendChild(navSettingsWrapper);

    //Generate the help banner in the nav bar

    const navHelpWrapper = document.createElement("div");
    navHelpWrapper.classList.add("navItem");

    const navHelp = document.createElement("div");
    navHelp.textContent = "Help";
    navHelpWrapper.appendChild(navHelp);

    const navHelpIcon = document.createElement("img");
    navHelpIcon.src = "";
    navHelpIcon.classList.add("navIcon");
    navHelpWrapper.appendChild(navHelpIcon);

    navOptionsWrapper.appendChild(navHelpWrapper);

    navPanelWrapper.appendChild(navOptionsWrapper);

    mainWrapper.appendChild(navPanelWrapper);

    //Load the saved projects, and add them to the nav bar

    this.LoadProjsToNavPanel(loadedProjs);
  }

  LoadProjsToNavPanel(loadedProjs) {
    if (loadedProjs) {
      loadedProjs.forEach((proj) => {
        this.AddNewNavPanelProj(proj);
      });
    }
  }

  AddNewNavPanelProj(project) {
    //This eventually should allow you to open specific projects onclick.
    const navProjectPanelWrapper = document.querySelector(
      ".NavProjPanelWrapper"
    );
    const ExistsInNav = navProjectPanelWrapper.querySelector(
      ".proj" + project.projectId
    );
    if (!ExistsInNav) {
      const navDefProj = document.createElement("div");

      navDefProj.textContent = project.projectName;
      navDefProj.classList.add(
        "navItem",
        "proj" + project.projectId,
        project.projectPrio
      );

      navDefProj.addEventListener("click", () => {
        const bodyProjWrapper = document.querySelector(".projBodyWrapper");
        this.GenerateProjectPanel(bodyProjWrapper, project);
      });

      navProjectPanelWrapper.appendChild(navDefProj);
    }
  }

  DeleteNavPanelProj(projectName) {
    // const navProjectPanelWrapper = document.querySelector(
    //   ".NavProjPanelWrapper"
    // );
    const navProjectToDelete = document.querySelector(
      `.${projectName}.navItem`
    );
    if (navProjectToDelete) {
      navProjectToDelete.parentNode.removeChild(navProjectToDelete);
    }
  }

  GenerateBodyPanel(mainWrapper) {
    const AddNewProjWrapper = document.createElement("div");
    AddNewProjWrapper.classList.add("projBodyWrapper");
    mainWrapper.appendChild(AddNewProjWrapper);
  }

  GenerateTodayPanel(projectStorage) {
    const mainWrapper = document.querySelector(".projBodyWrapper");
    if (!projectStorage || mainWrapper.querySelector(".todayWrapper")) {
      //this.GenerateSplashPanel();
    } else {
      const projWrapper = mainWrapper.querySelector(".projWrapper");
      if (projWrapper) {
        this.RemovePanel(projWrapper);
      }
      const todayWrapper = document.createElement("div");
      todayWrapper.classList.add("todayWrapper");
      const today = new Date();
      //
      projectStorage.forEach((proj) => {
        if (proj.projectTasks.length > 0) {
          //
          //Check if there are tasks due today
          //
          const tasksDueToday = proj.projectTasks.some((task) => {
            return (
              task.dueDate.getDate() === today.getDate() &&
              task.dueDate.getMonth() === today.getMonth() &&
              task.dueDate.getFullYear() === today.getFullYear()
            );
          });
          //Add a project header
          if (tasksDueToday) {
            const projName = document.createElement("div");
            projName.textContent = proj.projectName;
            projName.classList.add("projName", "projItem");
            todayWrapper.appendChild(projName);
            proj.projectTasks.forEach((task) => {
              if (
                task.dueDate.getDate() === today.getDate() &&
                task.dueDate.getMonth() === today.getMonth() &&
                task.dueDate.getFullYear() === today.getFullYear()
              ) {
                const taskWrapper = document.createElement("div");
                this.GenerateTaskPanel(taskWrapper, task, true);
                todayWrapper.appendChild(taskWrapper);
              }
            });
          }
        }
      });
      mainWrapper.appendChild(todayWrapper);
    }
  }

  GenerateProjectPanel(Wrapper, Project) {
    const projOpen = document.querySelector(".projWrapper");
    const todayWrapperOpen = document.querySelector(".todayWrapper");
    if (todayWrapperOpen) {
      this.RemovePanel(todayWrapperOpen);
    }
    if (!projOpen) {
      const projWrapper = document.createElement("div");
      projWrapper.classList.add("projWrapper");
      projWrapper.setAttribute("data-project-id", Project.projectId);

      const projName = document.createElement("div");
      projName.textContent = Project.projectName;
      projName.classList.add("projName", "projItem");
      projWrapper.appendChild(projName);

      const projDate = document.createElement("div");
      projDate.textContent =
        "Due Date: " + Project.projectDue.toLocaleDateString();
      projDate.classList.add("projDate", "projItem");
      projWrapper.appendChild(projDate);

      const projectDesc = document.createElement("div");
      projectDesc.textContent = Project.projectDesc;
      projectDesc.classList.add("projDesc", "projItem");
      projWrapper.appendChild(projectDesc);

      const projButtonWrapper = document.createElement("div");

      this.GenerateAddButton(projButtonWrapper, Project);
      this.GenerateDeleteButton(projWrapper, undefined, true);

      projWrapper.appendChild(projButtonWrapper);

      if (Project.projectTasks.length === 0) {
      } else {
        Project.projectTasks.forEach((element) => {
          const taskWrapper = document.createElement("div");
          this.GenerateTaskPanel(taskWrapper, element);

          projWrapper.appendChild(taskWrapper);
        });
      }
      this.AddNewNavPanelProj(Project);

      Wrapper.appendChild(projWrapper);
    }
  }

  // extractProjectInfo(projectWrapper) {
  //   // Retrieve project name from the data attribute
  //   const projectName = projectWrapper.getAttribute("data-project-name");

  //   // Find the Project instance associated with the project name
  //   return projects.find((project) => project.name === projectName);
  // }

  GenerateTaskPanel(Wrapper, task, todayPanelFlag = false) {
    //
    //Given a task and a wrapper, generate a panel that handles info about the task.
    //
    Wrapper.classList.add("taskWrapper");

    if (!todayPanelFlag)
      this.GenerateDeleteButton(Wrapper, task.taskPrio, true);

    const taskName = document.createElement("div");
    taskName.textContent = task.taskName;
    taskName.classList.add("taskName", "taskItem");

    const taskDate = document.createElement("div");
    taskDate.textContent = task.taskDue.toLocaleDateString();
    taskDate.classList.add("taskDate", "taskItem");

    const taskDesc = document.createElement("div");
    taskDesc.textContent = task.taskDesc;
    taskDesc.classList.add("taskDesc", "taskItem");

    Wrapper.appendChild(taskName);
    Wrapper.appendChild(taskDate);
    Wrapper.appendChild(taskDesc);
  }

  AddNewTask(id, name, description, dueDate, priority, project) {
    // Create a new Task object
    const newTask = new Task(id, name, description, dueDate, priority, project);

    // Generate a new task panel for the new task
    const taskWrapper = document.createElement("div");
    this.GenerateTaskPanel(taskWrapper, newTask);

    // Append the task panel to the appropriate location in the DOM
    project.tasks.push(newTask);
    const projWrapper = document.querySelector(
      `[data-project-id="${project.id}"]`
    );

    this.storageHandler.saveToLocalStorage(project);

    //Check to see if we need to enlarge the project container
    //this.ModifyTaskHeight(projWrapper, project);

    projWrapper.appendChild(taskWrapper);
  }

  AddNewProject(id, name, description, dueDate, priority) {
    // Create a new proj object
    const newProject = new Project(id, name, description, dueDate, priority);
    this.storageHandler.saveToLocalStorage(newProject);
    const projWrapper = document.querySelector(".projBodyWrapper");

    this.GenerateProjectPanel(projWrapper, newProject);
  }

  GenerateDeleteButton(wrapper, taskPrio, deleteDataFlag = false) {
    const Delete = document.createElement("button");

    Delete.addEventListener("click", () =>
      this.RemovePanel(wrapper, deleteDataFlag)
    );

    if (taskPrio !== undefined && taskPrio !== null) {
      Delete.classList.add("taskCircle", taskPrio, "taskItem");
      const deleteCheckMark = new Image();
      deleteCheckMark.classList.add("taskCheckMark");
      deleteCheckMark.src = Checkmark;
      Delete.appendChild(deleteCheckMark);
    } else {
      Delete.classList.add("deleteBtn");
      Delete.textContent = " X ";
    }

    wrapper.appendChild(Delete);
  }

  GenerateAddButton(wrapper, project) {
    const Add = document.createElement("button");
    Add.classList.add("addBtn");
    Add.textContent = " + ";
    Add.addEventListener("click", () => this.GenerateAddForm(wrapper, project));

    wrapper.appendChild(Add);
  }

  // Remove a panel and all its children from the DOM
  //This should be checking whats the closest proj/task panel and deleting down
  RemovePanel(panel, deleteDataFlag = false) {
    if (!panel) return;
    if (panel.classList.contains("projWrapper")) {
      // Call the function to delete the corresponding navigation panel
      this.DeleteNavPanelProj("proj" + panel.dataset.projectId);
    }
    while (panel.firstChild) {
      panel.removeChild(panel.firstChild);
    }

    panel.parentNode.removeChild(panel);

    if (deleteDataFlag)
      this.storageHandler.removeProjectFromLocalStorage(
        panel.dataset.projectId
      );
  }

  //Generate a form that allows you to add a new project, or task
  //should have a submit button at the bottom, and a close button.
  GenerateAddForm(wrapper, project) {
    const addFormOpen = document.querySelector(".formWrapper");

    if (!addFormOpen) {
      const formWrapper = document.createElement("div");
      formWrapper.classList.add("formWrapper");

      const formHeaderWrapper = document.createElement("div");
      formHeaderWrapper.classList.add("formHeaderWrapper");

      // const title = document.createElement("div");
      // title.textContent = "Add a new task or project";
      // formHeaderWrapper.appendChild(title);

      this.GenerateDeleteButton(formWrapper);

      formWrapper.appendChild(formHeaderWrapper);

      const form = document.createElement("form");

      const inputName = document.createElement("input");
      inputName.classList.add("addFormName");
      inputName.setAttribute("type", "text");
      inputName.setAttribute("name", "textInput");
      inputName.setAttribute("placeholder", "Enter title of project or task");
      form.appendChild(inputName);

      const inputDesc = document.createElement("input");
      inputDesc.classList.add("addFormDesc");
      inputDesc.setAttribute("type", "text");
      inputDesc.setAttribute("desc", "textInput");
      inputDesc.setAttribute("placeholder", "Enter description");
      form.appendChild(inputDesc);

      const dateFormWrapper = document.createElement("div");
      dateFormWrapper.classList.add("dateFormWrapper");

      const inputDate = document.createElement("input");
      inputDate.classList.add("addFormDate");
      inputDate.setAttribute("type", "date");
      inputDate.setAttribute("name", "dateInput");
      dateFormWrapper.appendChild(inputDate);

      const inputPrio = document.createElement("select");
      inputPrio.classList.add("addFormPrio");
      inputPrio.name = "priority";
      const options = ["Critical", "Urgent", "Routine"];

      options.forEach((optionText) => {
        const optionElement = document.createElement("option");
        optionElement.textContent = optionText;
        inputPrio.appendChild(optionElement);
      });
      dateFormWrapper.appendChild(inputPrio);
      form.appendChild(dateFormWrapper);

      const submitButton = document.createElement("button");
      submitButton.textContent = "Submit";
      form.appendChild(submitButton);

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Retrieve input values
        const name = inputName.value;
        const description = inputDesc.value;
        const date = inputDate.value;
        const priority = inputPrio.value;

        this.RemovePanel(formWrapper);
        if (!project) {
          //Generate the project with a random ID number
          this.AddNewProject(
            Math.floor(Math.random() * 999999999),
            name,
            description,
            date,
            priority
          );
        } else {
          this.AddNewTask(
            Math.floor(Math.random() * 999999999),
            name,
            description,
            date,
            priority,
            project
          );
        }
      });

      formWrapper.appendChild(form);

      wrapper.appendChild(formWrapper);
    }
  }

  GenerateOnEntry(defaultProj) {
    this.GenerateDomStructure(defaultProj);
  }
}
