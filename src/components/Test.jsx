import React, { useState, useRef } from 'react';

const ResizableSides = () => {
  const [side1Width, setSide1Width] = useState(300); // Initial width of side1
  const side1Ref = useRef(null); // Ref for the side1 element
  const dividerRef = useRef(null); // Ref for the divider
  const dragging = useRef(false); // To track dragging state
  const lastX = useRef(0); // To track last mouse position

  // Start dragging when mouse is down on the divider
  const handleMouseDown = (e) => {
    dragging.current = true;
    lastX.current = e.clientX; // Store the current mouse position
  };

  // Handle the dragging action
  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    
    const diff = e.clientX - lastX.current; // Calculate difference in X-axis
    setSide1Width((prevWidth) => prevWidth + diff); // Update width of side1
    lastX.current = e.clientX; // Update the last mouse position
  };

  // Stop dragging when mouse is released
  const handleMouseUp = () => {
    dragging.current = false;
  };

  // Attach mousemove and mouseup listeners to the document when dragging
  React.useEffect(() => {
    if (dragging.current) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging.current]);

  return (
    <div 
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
      }}
    >
      <div
        className="side1"
        ref={side1Ref}
        style={{
          width: `${side1Width}px`,
          backgroundColor: '#f0f0f0',
          height: '100%',
        }}
      />
      <div
        ref={dividerRef}
        onMouseDown={handleMouseDown} // Start dragging on divider
        style={{
          cursor: 'ew-resize',
          width: '10px',
          backgroundColor: '#888',
          height: '100%',
          marginLeft: '-5px', // Center the divider on the gap
        }}
      />
      <div
        className="side2"
        style={{
          flex: 1, // side2 will take the remaining space
          backgroundColor: '#d0d0d0',
          height: '100%',
        }}
      />
    </div>
  );
};

export default ResizableSides;
