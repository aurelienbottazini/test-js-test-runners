
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 10 to equal 47', () => {
  expect(sum(37, 10)).toBe(47);
});
