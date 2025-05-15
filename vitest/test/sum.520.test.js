
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 31 to equal 47', () => {
  expect(sum(16, 31)).toBe(47);
});
