export async function setItemLocalStorage(key: any, value: any) {
  return localStorage.setItem(key, value);
}

export async function getItemLocalStorage(key: any) {
  return localStorage.getItem(key);
}

export async function deleteItemLocalStorage(key: any) {
  return localStorage.removeItem(key);
}
