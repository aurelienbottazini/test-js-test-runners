
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 6 to equal 47', () => {
  expect(sum(41, 6)).toBe(47);
});
