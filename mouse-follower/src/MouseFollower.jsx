import { useEffect, useState } from "react";

export function MouseFollower() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('Seguimiento:', enabled);
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // Cleanup: eliminar el evento 'pointermove' cuando el componente se desmonta
    return () => {
      console.log('cleanup');
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    // Cambiar la clase del body para ocultar el cursor cuando esté habilitado
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      // Eliminar la clase 'no-cursor' cuando el componente se desmonta
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button
        onClick={() => setEnabled(!enabled)}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {enabled ? "Desactivar" : "Activar"} Seguimiento
      </button>
    </>
  );
}
