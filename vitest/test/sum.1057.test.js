
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 1 to equal 12', () => {
  expect(sum(11, 1)).toBe(12);
});
