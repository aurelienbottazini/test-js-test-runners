
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 8 to equal 76', () => {
  expect(sum(68, 8)).toBe(76);
});
