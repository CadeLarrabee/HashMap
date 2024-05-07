import "./style.css";
import { Project } from "./projectModule.js";
import { Task } from "./taskModule.js";
import { DomController } from "./DomManip.js";
import { format } from "date-fns";

function OnEntry() {
  const DomManip = new DomController();

  DomManip.GenerateOnEntry();
}

OnEntry();
