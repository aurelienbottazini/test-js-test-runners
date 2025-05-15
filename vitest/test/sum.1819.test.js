
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 67 to equal 99', () => {
  expect(sum(32, 67)).toBe(99);
});
