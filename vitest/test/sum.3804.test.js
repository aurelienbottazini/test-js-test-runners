
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 41 to equal 80', () => {
  expect(sum(39, 41)).toBe(80);
});
