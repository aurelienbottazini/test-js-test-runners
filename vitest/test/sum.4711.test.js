
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 84 to equal 99', () => {
  expect(sum(15, 84)).toBe(99);
});
