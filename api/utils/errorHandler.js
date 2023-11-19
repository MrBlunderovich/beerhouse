function errorHandler(err, req, res) {
  if (err.name === "ValidationError") {
    const errorMessages = Object.values(err.errors).map(
      (error) => error.properties.message
    );
    res.status(400).json({ error: err._message, messages: errorMessages });
  } else {
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = errorHandler;
