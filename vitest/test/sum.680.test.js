
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 41 to equal 94', () => {
  expect(sum(53, 41)).toBe(94);
});
