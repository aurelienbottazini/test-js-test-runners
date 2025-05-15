
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 44 to equal 76', () => {
  expect(sum(32, 44)).toBe(76);
});
