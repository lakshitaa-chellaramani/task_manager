import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../firebase";

export default function deleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateTask"],
    mutationFn: async ({ taskId }) => {
      const data = await deleteDoc(doc(firestore, "tasks", taskId));
      return data;
    },

    onSuccess: () => {
      console.log("Task deleted successfully");
      queryClient.refetchQueries();
    },
  });
}
