
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 25 to equal 32', () => {
  expect(sum(7, 25)).toBe(32);
});
