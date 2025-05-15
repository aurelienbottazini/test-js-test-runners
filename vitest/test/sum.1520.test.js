
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 15 to equal 76', () => {
  expect(sum(61, 15)).toBe(76);
});
