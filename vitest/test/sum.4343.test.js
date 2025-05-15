
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 28 to equal 32', () => {
  expect(sum(4, 28)).toBe(32);
});
