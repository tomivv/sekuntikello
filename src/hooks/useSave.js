import { useState } from "react";

export default function useSave() {
  const [saves, setSaves] = useState([]);

  function changeSaves(save) {
    setSaves([...saves, save]);
  }

  function clearSaved() {
    setSaves([]);
  }

  return { saves, changeSaves, clearSaved };
}
