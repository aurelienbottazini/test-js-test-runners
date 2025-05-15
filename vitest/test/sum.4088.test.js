
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 20 to equal 76', () => {
  expect(sum(56, 20)).toBe(76);
});
