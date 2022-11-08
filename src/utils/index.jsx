export function currency(number) {
  return new Intl.NumberFormat("vn").format(number) + "vnd";
}

//a=1&b=2&c=3 => {a:1, b:2, c:3}
export function convertQueryToObj() {
  var search = window.location.search.substring(1);
  return !search
    ? {}
    : JSON.parse(
        '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        function (key, value) {
          return key === "" ? value : decodeURIComponent(value);
        }
      );
}

//nguoc lai
export const convertObjToQuery = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};
