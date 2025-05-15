
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 41 to equal 104', () => {
  expect(sum(63, 41)).toBe(104);
});
