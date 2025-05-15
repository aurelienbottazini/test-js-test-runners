
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 56 to equal 124', () => {
  expect(sum(68, 56)).toBe(124);
});
