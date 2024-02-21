import { HOST } from "./index";

export function GetHost() {
  return HOST;
}

/**
 * Random UUID 4 Space Sized Generator
 * @returns Random UUID 4 space Sized
 */
export function uuidv4Size4(): string {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (parseInt(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (parseInt(c) / 4)))).toString(16)
  );
}
