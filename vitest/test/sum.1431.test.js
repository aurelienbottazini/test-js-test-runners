
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 13 to equal 25', () => {
  expect(sum(12, 13)).toBe(25);
});
