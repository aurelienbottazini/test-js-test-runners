
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 12 to equal 76', () => {
  expect(sum(64, 12)).toBe(76);
});
