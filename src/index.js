import { HashMap } from "./hashMapModule.js";

function OnEntry() {
  const hashMap = new HashMap(16, 0.5);
  hashMap.set("cade", 31);
}

OnEntry();
