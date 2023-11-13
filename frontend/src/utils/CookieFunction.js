export function setCookie(cname, cvalue) {
    console.log('value', cvalue);
    let storedValue = '';

    storedValue = decodeURIComponent(cvalue);
    console.log('storedValue', storedValue);
    document.cookie = cname + "=" + cvalue;
}

export function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const setPurchasedCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

export const getPurchasedCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      const trimmedName = cookieName.trim();
      if (trimmedName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return '';
  };