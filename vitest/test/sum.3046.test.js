
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 84 to equal 137', () => {
  expect(sum(53, 84)).toBe(137);
});
