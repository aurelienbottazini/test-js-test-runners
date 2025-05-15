
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 88 to equal 124', () => {
  expect(sum(36, 88)).toBe(124);
});
