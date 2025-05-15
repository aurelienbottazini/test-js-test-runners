
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 97 to equal 194', () => {
  expect(sum(97, 97)).toBe(194);
});
