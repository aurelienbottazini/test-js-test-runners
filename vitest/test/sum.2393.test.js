
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 13 to equal 44', () => {
  expect(sum(31, 13)).toBe(44);
});
