
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 48 to equal 104', () => {
  expect(sum(56, 48)).toBe(104);
});
