
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 92 to equal 141', () => {
  expect(sum(49, 92)).toBe(141);
});
