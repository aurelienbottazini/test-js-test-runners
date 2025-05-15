
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 88 to equal 144', () => {
  expect(sum(56, 88)).toBe(144);
});
