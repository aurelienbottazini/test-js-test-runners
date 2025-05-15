
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 67 to equal 72', () => {
  expect(sum(5, 67)).toBe(72);
});
