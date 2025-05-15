
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 29 to equal 71', () => {
  expect(sum(42, 29)).toBe(71);
});
