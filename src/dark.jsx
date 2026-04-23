import React, { useState } from 'react'

function Dark() {
  const [darke, setDarke] = useState(false);

  function toggleMode() {
    if (darke) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }

    setDarke(!darke);
  }

  return (
    <div className={darke ? "dark" : "Light"}>
      <button onClick={toggleMode}>
        {darke ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default Dark;