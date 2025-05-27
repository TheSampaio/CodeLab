export function DevConsole(props) {
  return (
    <div
      className="dev-console"
      style={{
        margin: "75px auto",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        padding: "0 20px",
      }}
    >
      <hr style={{ marginBottom: "30px" }} />
      <div
        style={{
          overflowX: "auto",
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <h2>Location API</h2>

        <pre style={{ margin: 0 }}>
          {JSON.stringify(props.locationData, null, 2)}
        </pre>
      </div>
      <div
        style={{
          marginTop: "30px",
          overflowX: "auto",
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <h2>Weather API</h2>

        <pre style={{ margin: 0 }}>
          {JSON.stringify(props.weatherData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
