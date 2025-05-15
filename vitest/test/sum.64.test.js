
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 63 to equal 65', () => {
  expect(sum(2, 63)).toBe(65);
});
