# Notes App
An app to add notes, list notes and Remove certain added notes.All the notes added by user will be added in a file name _Notes.json_ . All the operation will take place via user commands and will use the _Notes.json_ file to add,remove notes.
These are the commands which can be used to run the application :

**Add Note**
```
node app.js add --title="<YOUR_NOTE_TITLE>" --body="<YOUR_NOTE_BODY>"
```

**Remove a Note**
```
node app.js remove --title="<YOUR_NOTE_TITLE_TO_REMOVE>"
```

**List all Notes**
```
node app.js list
```
**Read a single Note**
```
node app.js read --titke="<YOUR_NOTE_TITLE_TO_READ>"
```
