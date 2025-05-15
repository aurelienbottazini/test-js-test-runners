
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 1 to equal 57', () => {
  expect(sum(56, 1)).toBe(57);
});
