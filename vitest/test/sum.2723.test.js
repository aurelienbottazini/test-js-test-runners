
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 5 to equal 76', () => {
  expect(sum(71, 5)).toBe(76);
});
