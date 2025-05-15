
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 15 to equal 57', () => {
  expect(sum(42, 15)).toBe(57);
});
