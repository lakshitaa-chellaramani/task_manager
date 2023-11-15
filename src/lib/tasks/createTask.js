import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";

export default function createTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createTask"],

    mutationFn: async ({ userId, status, title, content, tag, date }) => {
      const data = await addDoc(collection(firestore, "tasks"), {
        userId,
        status,
        title,
        content,
        tag,
        date,
        createdAt: new Date().getTime(),
      });
      return data.id;
    },
    onSuccess: () => {
      console.log("Task added successfully");
      queryClient.refetchQueries();
    },
  });
}
