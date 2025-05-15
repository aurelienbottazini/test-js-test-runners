
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 6 to equal 48', () => {
  expect(sum(42, 6)).toBe(48);
});
