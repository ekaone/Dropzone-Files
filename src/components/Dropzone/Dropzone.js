import React, { useState, useEffect } from "react";
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
            <p>
              Drag 'n' drop some files here, or <u>click</u> to select files
            </p>
          </aside>
        </div>
      </section>
      <section>
        <aside style={thumbsContainer}>
          <h4>Click image to removed</h4>
          <br />
          {thumbs}
        </aside>
        <aside>
          <button onClick={() => setFiles([])}>Delete all Images</button>
        </aside>
      </section>
      <hr />
      <header>
        <section>
          <pre>{JSON.stringify(files, null, 4)}</pre>
        </section>
      </header>
    </>
  );
}
