
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 97 to equal 128', () => {
  expect(sum(31, 97)).toBe(128);
});
