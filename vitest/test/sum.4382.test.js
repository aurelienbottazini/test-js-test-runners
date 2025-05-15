
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 9 to equal 37', () => {
  expect(sum(28, 9)).toBe(37);
});
