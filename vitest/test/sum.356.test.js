
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 11 to equal 51', () => {
  expect(sum(40, 11)).toBe(51);
});
