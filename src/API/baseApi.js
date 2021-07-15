import axios from "axios";

// TODO: remove after fix connections problem
const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFJZDEyMzQiLCJmaXJzdE5hbWUiOiJuYW1lXzEiLCJsYXN0TmFtZSI6ImxOYW1lXzEiLCJlbWFpbCI6InVzZXJfMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjFQYXNzXzEyMzQiLCJpYXQiOjE2MjYzNTEwMjh9.nNWPAYWtGH7DaWkMjMNYMos-WKsyTfHlvkPWevVKFwM"

export const BaseURL = "http://localhost:1234"

export const yourConfig = {
    headers: {
       Authorization: "Bearer " + jwt
    }
 }

