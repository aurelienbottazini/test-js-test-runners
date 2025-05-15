
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 25 to equal 81', () => {
  expect(sum(56, 25)).toBe(81);
});
