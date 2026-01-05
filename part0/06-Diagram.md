sequenceDiagram
    participant browser
    participant server

    Note right of browser: The browser executes the JavaScript code that adds the new note to the list and redraws the page locally

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {"message":"note created"} (HTTP 201 Created)
    deactivate server

    Note right of browser: The browser stays on the same page and no further requests are sent
