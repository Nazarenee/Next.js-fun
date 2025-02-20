import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const PhotoDetail = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      {id} {photoId}
    </div>
  );
};

export default PhotoDetail;
