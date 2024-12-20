const URL = "https://bankapi.alfredofernandez.dk/api";

// const URL = "http://localhost:7070/api";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from later steps 

here (REMEMBER to uncomment in the returned 
object when you do)*/

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const login = (user, password) => {
    /*TODO*/
    const options = makeOptions("POST", false, {
      username: user,
      password: password,
    });
    console.log("login", user, password);
    console.log("options", JSON.stringify(options));
    return fetch(URL + "/auth/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
        localStorage.setItem("name", res.name); // Gem navnet i localStorage

      });
  };
  // Generel fetchData-metode til GET, POST, PUT, DELETE
  const fetchData = (endpoint, method = "GET", body = null) => {
    const options = makeOptions(method, true, body);
    return fetch(URL + endpoint, options).then(handleHttpErrors);
  };
  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  const getUserRoles = () => {
    const token = getToken()
    if (token != null) {
        const payloadBase64 = getToken().split('.')[1]
        const decodedClaims = JSON.parse(window.atob(payloadBase64))
        const roles = decodedClaims.roles
        return roles
    } else return ""
}

const hasUserAccess = (neededRole, loggedIn) => {
    const roles = getUserRoles().split(',')
    return loggedIn && roles.includes(neededRole)
}

const getUsername = () =>{
    const token = getToken()
    if (token != null) {
        const payloadBase64 = getToken().split('.')[1]
        const decodedClaims = JSON.parse(window.atob(payloadBase64))
        const username = decodedClaims.sub
        return username
    } else return ""
}

const getName = () => {
 return localStorage.getItem("name");
};


  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
    getUserRoles,
    hasUserAccess,
    getUsername,
    getName,
  };
}
const facade = apiFacade();
export default facade;
