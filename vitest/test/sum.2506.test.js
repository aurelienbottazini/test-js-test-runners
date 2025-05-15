
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 20 to equal 51', () => {
  expect(sum(31, 20)).toBe(51);
});
