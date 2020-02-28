export default function ({ route, redirect }) {
  if (!route.path.includes('casestudy')) {
    return
  }
  // If is a casestudy page and password has not been provided
  if (!window.localStorage.getItem('cfPasswordProvided') && window.localStorage.getItem('cfPasswordProvided') !== true) {
    return redirect('/inputpassword')
  }
}
