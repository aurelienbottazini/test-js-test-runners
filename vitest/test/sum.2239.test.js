
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 31 to equal 99', () => {
  expect(sum(68, 31)).toBe(99);
});
