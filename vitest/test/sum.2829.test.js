
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 23 to equal 57', () => {
  expect(sum(34, 23)).toBe(57);
});
