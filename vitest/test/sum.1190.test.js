
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 85 to equal 141', () => {
  expect(sum(56, 85)).toBe(141);
});
