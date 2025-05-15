
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 9 to equal 25', () => {
  expect(sum(16, 9)).toBe(25);
});
