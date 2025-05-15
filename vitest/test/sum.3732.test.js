
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 68 to equal 124', () => {
  expect(sum(56, 68)).toBe(124);
});
