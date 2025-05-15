
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 86 to equal 142', () => {
  expect(sum(56, 86)).toBe(142);
});
