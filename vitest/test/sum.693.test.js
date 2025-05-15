
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 51 to equal 55', () => {
  expect(sum(4, 51)).toBe(55);
});
