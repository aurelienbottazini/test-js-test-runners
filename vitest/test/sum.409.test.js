
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 6 to equal 16', () => {
  expect(sum(10, 6)).toBe(16);
});
