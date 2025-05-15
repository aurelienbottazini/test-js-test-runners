
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 91 to equal 100', () => {
  expect(sum(9, 91)).toBe(100);
});
