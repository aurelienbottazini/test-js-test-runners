
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 31 to equal 114', () => {
  expect(sum(83, 31)).toBe(114);
});
