// pages/about.js

import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container style={{ maxWidth: "900px", fontFamily: "monospace" }}>
      <Typography variant="h4" component="div" style={{ fontFamily: "monospace", color: "black" }}>
        About GeoNotes.io
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{
          fontFamily: "monospace",
          color: "black",
          margin: "15px 0 0 0",
          background: "#c6fbc6",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        GeoNotes.io was created by <a href="https://www.geoguessr.com/user/5f0524fe657099387000f26e">@geoheek</a> to
        help share tips about Google Street View clues from around the 🌎 (Note, GeoNotes is not affiliated with
        GeoGuessr)
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{
          fontFamily: "monospace",
          color: "black",
          margin: "15px 0 0 0",
          background: "lightgrey",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        NOTE ON CHEATING ⛔️ This site is intended to be a fun way to share tips about Google Street View clues and use
        them to get better. Please do NOT use this site to cheat on GeoGuessr. It is not fun for you or your opponents.
        It is also not fun for the GeoGuessr community.
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{
          fontFamily: "monospace",
          color: "black",
          margin: "15px 0 0 0",
          background: "lightblue",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        Feedback is welcome! The project is also{" "}
        <b>actively looking for collaborators - software engineers (Next.js) or just anyone passionate about GeoGuessr</b>{" "}
        to help build out GeoNotes.io 👇👇
      </Typography>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdQiPzqN8m2Oa2_nm1rnLNr4ZQkDjFZ_W92UvWKn9Dmqh1kLQ/viewform?embedded=true"
        width="640"
        height="650"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        margin="15px 0 0 0"
      >
        Loading…
      </iframe>
    </Container>
  );
}
