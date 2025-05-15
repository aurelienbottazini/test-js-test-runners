
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 15 to equal 55', () => {
  expect(sum(40, 15)).toBe(55);
});
