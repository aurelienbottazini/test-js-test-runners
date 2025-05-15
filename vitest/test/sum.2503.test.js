
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 69 to equal 76', () => {
  expect(sum(7, 69)).toBe(76);
});
