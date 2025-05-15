
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 67 to equal 163', () => {
  expect(sum(96, 67)).toBe(163);
});
