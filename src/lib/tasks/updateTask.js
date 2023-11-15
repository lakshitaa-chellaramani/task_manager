import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";

export default function updateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateTask"],
    mutationFn: async ({ taskId, status }) => {
      const data = await updateDoc(doc(firestore, "tasks", taskId), {
        status: status,
      });
      return data;
    },

    onSuccess: () => {
      console.log("Task updated successfully");
      queryClient.refetchQueries();
    },
  });
}
