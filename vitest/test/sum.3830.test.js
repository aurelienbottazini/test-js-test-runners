
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 35 to equal 55', () => {
  expect(sum(20, 35)).toBe(55);
});
