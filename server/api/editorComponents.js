const router = require("express").Router();

/*
Fetch default data for editor content components.

GET /api/defaultEditorData
*/
router.get("/defaultEditorData", (req, res) => {
  // data would actually come from the database or a file
  var data = {
    // This object would contain properties such as table, list, image, etc.
    // It currently only contains a table item.
    table: [
      /* Each item in the array represents a table row */
      {
        type: "header",
        cols: [
          "Heading1",
          "Heading2",
          "Heading3",
          "Heading4",
          "Heading5",
          "Heading6",
          "Heading7",
          "Heading8",
          "Heading9",
          "Heading10"
        ]
      },
      {
        type: "body",
        cols: [
          "Cell1",
          "Cell2",
          "Cell3",
          "Cell4",
          "Cell5",
          "Cell6",
          "Cell7",
          "Cell8",
          "Cell9",
          "Cell10"
        ]
      },
      {
        type: "body",
        cols: [
          "Cell1",
          "Cell2",
          "Cell3",
          "Cell4",
          "Cell5",
          "Cell6",
          "Cell7",
          "Cell8",
          "Cell9",
          "Cell10"
        ]
      },
      {
        type: "body",
        cols: [
          "Cell1",
          "Cell2",
          "Cell3",
          "Cell4",
          "Cell5",
          "Cell6",
          "Cell7",
          "Cell8",
          "Cell9",
          "Cell10"
        ]
      },
      {
        type: "body",
        cols: [
          "Cell1",
          "Cell2",
          "Cell3",
          "Cell4",
          "Cell5",
          "Cell6",
          "Cell7",
          "Cell8",
          "Cell9",
          "Cell10"
        ]
      },
      {
        type: "body",
        cols: [
          "Cell1",
          "Cell2",
          "Cell3",
          "Cell4",
          "Cell5",
          "Cell6",
          "Cell7",
          "Cell8",
          "Cell9",
          "Cell10"
        ]
      },
      {
        type: "body",
        cols: [
          "Cell1",
          "Cell2",
          "Cell3",
          "Cell4",
          "Cell5",
          "Cell6",
          "Cell7",
          "Cell8",
          "Cell9",
          "Cell10"
        ]
      },
      {
        type: "body",
        cols: [
          "Cell1",
          "Cell2",
          "Cell3",
          "Cell4",
          "Cell5",
          "Cell6",
          "Cell7",
          "Cell8",
          "Cell9",
          "Cell10"
        ]
      },
      {
        type: "body",
        cols: [
          "Cell1",
          "Cell2",
          "Cell3",
          "Cell4",
          "Cell5",
          "Cell6",
          "Cell7",
          "Cell8",
          "Cell9",
          "Cell10"
        ]
      },
      {
        type: "body",
        cols: [
          "Cell1",
          "Cell2",
          "Cell3",
          "Cell4",
          "Cell5",
          "Cell6",
          "Cell7",
          "Cell8",
          "Cell9",
          "Cell10"
        ]
      }
    ]
  };

  res.send(data);
});

module.exports = router;
