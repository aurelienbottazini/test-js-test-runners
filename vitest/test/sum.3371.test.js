
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 7 to equal 51', () => {
  expect(sum(44, 7)).toBe(51);
});
