
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 41 to equal 57', () => {
  expect(sum(16, 41)).toBe(57);
});
