
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 98 to equal 140', () => {
  expect(sum(42, 98)).toBe(140);
});
