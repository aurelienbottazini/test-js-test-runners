
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 10 to equal 16', () => {
  expect(sum(6, 10)).toBe(16);
});
