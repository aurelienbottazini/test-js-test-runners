
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 1 to equal 98', () => {
  expect(sum(97, 1)).toBe(98);
});
