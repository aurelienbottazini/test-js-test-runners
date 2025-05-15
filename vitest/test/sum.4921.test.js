
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 5 to equal 52', () => {
  expect(sum(47, 5)).toBe(52);
});
