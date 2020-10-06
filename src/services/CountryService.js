const webApiUrl = "http://3.18.137.216:8098/api/visitor/security";
/*http://3.18.137.216:8098*/

class CountryService {

  init = async (activeCode) => {
    const options = {
      method: "GET",
    }
    const request = new Request(webApiUrl + "/init/" + activeCode, options);
    const response = await fetch(request);
    return response.json();
  }

  get = async (urlParams) => {
    const options = {
      method: "GET",
    }
    const request = new Request(webApiUrl + "?" + urlParams, options);
    const response = await fetch(request);
    return response.json();
  }
  post = async (model) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    var options = {
      method: "POST",
      headers,
      body: JSON.stringify(model)
    }
    const request = new Request(webApiUrl, options);
    const response = await fetch(request);
    return response;
  }
  put = async (model) => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json");
    var options = {
      method: "PUT",
      headers,
      body: JSON.stringify(model)
    }
    const request = new Request(webApiUrl, options);
    const response = await fetch(request);
    return response;
  }
  delete = async (id) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "DELETE",
      headers
    }
    const request = new Request(webApiUrl + "/" + id, options);
    const response = await fetch(request);
    return response;
  }
}
export default CountryService;
