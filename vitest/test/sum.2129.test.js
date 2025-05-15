
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 71 to equal 98', () => {
  expect(sum(27, 71)).toBe(98);
});
