
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 63 to equal 119', () => {
  expect(sum(56, 63)).toBe(119);
});
