
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 64 to equal 76', () => {
  expect(sum(12, 64)).toBe(76);
});
