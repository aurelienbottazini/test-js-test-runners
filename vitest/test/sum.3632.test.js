
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 8 to equal 55', () => {
  expect(sum(47, 8)).toBe(55);
});
