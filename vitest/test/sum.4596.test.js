
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 55 to equal 57', () => {
  expect(sum(2, 55)).toBe(57);
});
