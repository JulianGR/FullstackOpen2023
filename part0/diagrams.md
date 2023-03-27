

0.4

We've been shown the diagram for ACCESSING the not-spa webapp. This is the diagram representing CREATING a note in the not-spa webapp.


```mermaid
sequenceDiagram
    participant browser
    participant server


    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 302 redirect to /exampleapp/notes
    deactivate server

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: 304 Not Modified (because its cached)
    deactivate server

	Note right of browser: this causes the 3 requests to be made (main.css, main.js, data.json)

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

0.5
Diagram for ACCESSING the spa webapp. 

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: 200 OK 
    deactivate server

Note right of browser: it has the js file that the browser needs to request

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: 200 OK 
    deactivate server


Note right of browser: the js file, with xhttp.open("GET", "/exampleapp/data.json", true)
	
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: the json
    deactivate server

Note right of browser: The browser executes the callback function that renders the notes
```



0.6

Diagram representing CREATING a note in the spa webapp.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created ({"message":"note created"})
    deactivate server

Note right of browser: we got the confirmation that the server created a note, and our browser renders the note we just created. That way, there are less requests and responses (more efficient communication)
```
