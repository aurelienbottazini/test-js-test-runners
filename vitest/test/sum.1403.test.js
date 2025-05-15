
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 8 to equal 50', () => {
  expect(sum(42, 8)).toBe(50);
});
