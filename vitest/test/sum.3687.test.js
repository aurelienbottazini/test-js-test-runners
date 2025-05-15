
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 23 to equal 23', () => {
  expect(sum(0, 23)).toBe(23);
});
