
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 86 to equal 168', () => {
  expect(sum(82, 86)).toBe(168);
});
