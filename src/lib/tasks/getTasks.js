import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase";
import { useQuery } from "@tanstack/react-query";

export async function getCollection({ userId }) {
  const collectionRef = query(
    collection(firestore, "tasks"),
    where("userId", "==", userId)
  );
  const collectionSnapshot = await getDocs(collectionRef);
  console.log(collectionSnapshot);
  const collectionData = collectionSnapshot.docs.map((doc) => ({
    taskId: doc.id,
    ...doc.data(),
  }));
  return collectionData;
}

export default function getTasks({ userId }) {
  const tasks = useQuery({
    queryKey: ["tasks", userId],
    queryFn: () => getCollection({ userId }),
    onSuccess: () => {
      console.log("Tasks fetched successfully");
    },
    onError: (e) => {
      console.log(e);
    },
  });

  return tasks;
}
