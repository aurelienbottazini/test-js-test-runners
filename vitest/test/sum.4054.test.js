
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 25 to equal 83', () => {
  expect(sum(58, 25)).toBe(83);
});
