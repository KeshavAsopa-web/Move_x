import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjA0NmVhNTk0YTdkNjNlNjdmNjIwOThmMjdjOWRjMiIsIm5iZiI6MTczMTE0NDU2NS4zNzMsInN1YiI6IjY3MmYyYjc1YWJlOGEwZDk5NGEyMWE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EUx1dF8xzteGpGnuqbd1hUJfBAJfTxCg7FNgjWcLWso'
      }
});

export default instance;
