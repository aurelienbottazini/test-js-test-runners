
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 82 to equal 124', () => {
  expect(sum(42, 82)).toBe(124);
});
