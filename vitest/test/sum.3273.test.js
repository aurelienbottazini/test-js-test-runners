
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 67 to equal 95', () => {
  expect(sum(28, 67)).toBe(95);
});
