
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 9 to equal 16', () => {
  expect(sum(7, 9)).toBe(16);
});
