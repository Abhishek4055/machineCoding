export default function FlattenAnObject() {
  const obg = {
    a: 1,
    b: 2,
    c: {
      a: 3,
      b: 4,
      c: {
        d: 6,
        e: 7,
      },
    },
  };

  const flatObj = (obj, path = "") => {
    let result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey = path ? `${path}.${key}` : key;

        if (
          typeof obj[key] === "object" &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          Object.assign(result, flatObj(obj[key], newKey));
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  };

  console.log(flatObj(obg));

  return (
    <ThemeProvider>
      <div className="container">
        <h1>Hii... !</h1>
      </div>
    </ThemeProvider>
  );
}
