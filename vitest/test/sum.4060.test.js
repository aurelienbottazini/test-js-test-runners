
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 44 to equal 51', () => {
  expect(sum(7, 44)).toBe(51);
});
