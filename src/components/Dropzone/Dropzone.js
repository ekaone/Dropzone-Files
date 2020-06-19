import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone() {
  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box"
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%"
  };

  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map((file, index) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file, index),
            index: index
          })
        )
      );
    }
  });

  const handleDelete = id => {
    const d = files.filter(f => {
      return f.index !== id;
    });
    setFiles(d);
    console.log(d);
  };

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt={file.path}
          onClick={() => handleDelete(file.index)}
        />
        <br />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <section>
        <div {...getRootProps({ className: "dropzone" })}>
          <aside style={{ backgroundColor: "yellow" }}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </aside>
        </div>
      </section>
      <section>
        <aside style={thumbsContainer}>{thumbs}</aside>
        <aside>
          <button onClick={() => setFiles([])}>Delete Images</button>
        </aside>
        <aside>
          <pre>
            {files.length !== 0 ? JSON.stringify(files, null, 2) : "JSON"}
          </pre>
        </aside>
      </section>
    </>
  );
}
