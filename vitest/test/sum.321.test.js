
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 23 to equal 114', () => {
  expect(sum(91, 23)).toBe(114);
});
