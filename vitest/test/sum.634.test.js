
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 10 to equal 55', () => {
  expect(sum(45, 10)).toBe(55);
});
