
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 2 to equal 23', () => {
  expect(sum(21, 2)).toBe(23);
});
