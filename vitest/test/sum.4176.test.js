
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 40 to equal 51', () => {
  expect(sum(11, 40)).toBe(51);
});
