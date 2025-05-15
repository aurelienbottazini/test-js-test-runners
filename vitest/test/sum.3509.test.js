
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 76 to equal 99', () => {
  expect(sum(23, 76)).toBe(99);
});
