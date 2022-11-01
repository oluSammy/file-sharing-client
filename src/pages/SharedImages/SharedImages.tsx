import { useState, useEffect } from "react";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { IImage } from "../AllImages/AllImages";
import { db } from "../../firebase/firebaseConfig";
import useAuth from "../../Hooks/useAuth";
import ImageContainer from "../../containers/ImageContainer";

const SharedImages = () => {
  const auth = useAuth();
  const [images, setImages] = useState<IImage[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "images"),
      where("shared", "==", true),
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
          you have not shared any image
        </h1>
      </div>
    );
  }

  return <ImageContainer images={images} sharable={false} showSort={true} />;
};

export default SharedImages;
