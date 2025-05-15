
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 67 to equal 100', () => {
  expect(sum(33, 67)).toBe(100);
});
