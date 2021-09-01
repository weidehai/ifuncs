export function base64Encode(str: string) {
  const base64Basic =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let binaryStr = Array.prototype.reduce.call(
    str,
    (accumulator: string, char: string) => {
      return (accumulator += char.charCodeAt(0).toString(2).padStart(8, "0"));
    },
    ""
  );
  let blocks = binaryStr.match(/(.{6}|.+?\b)/g);
  blocks = blocks.map((item: string) => {
    if (item.length < 6) item = item.padEnd(6, "0");
    return item.padStart(8, "0");
  });
  let result = blocks.map((item: string) => {
    return base64Basic[parseInt(item, 2)];
  });
  let additional = '='.repeat(3-str.length%3)
  return result.join('')+additional;
}
