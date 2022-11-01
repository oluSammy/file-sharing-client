import { db } from "../../firebase/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import ImageContainer from "../../containers/ImageContainer";

export interface IImage {
  userId: string;
  image: string;
  tags: string[];
  id: string;
}

const AllImages = () => {
  const [images, setImages] = useState<IImage[]>([]);
  const auth = useAuth();

  useEffect(() => {
    const q = query(
      collection(db, "images"),
      where("userId", "==", auth.user.user.uid)
      //   orderBy("time", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const newImages = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      const imgs = newImages as IImage[];
      setImages([...imgs, ...images]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (images.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-center mt-[40px]">
          You have not uploaded any image
        </h1>
      </div>
    );
  }
  return <ImageContainer images={images} sharable={true} showSort={true} />;
};

export default AllImages;
