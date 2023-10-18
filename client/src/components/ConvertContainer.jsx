import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function ConvertContainer(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="text-center">
      <div className="m-12">
        <div className="text-center text-rose-500 text-5xl font-bold my-4">
          Pdf To PPT
        </div>
        <div className="text-center text-md my-4 mb-8">
          Manage your PDF Files better and convert to PPT
        </div>
      </div>
      <form>
        <div {...getRootProps}>
          <input
            {...getInputProps}
            type="file"
            className="file-input file-input-bordered file-input-error w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  );
}

export default ConvertContainer;
