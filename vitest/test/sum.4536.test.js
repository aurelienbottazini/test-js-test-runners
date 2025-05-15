
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 53 to equal 69', () => {
  expect(sum(16, 53)).toBe(69);
});
