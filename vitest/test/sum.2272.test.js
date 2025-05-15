
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 87 to equal 99', () => {
  expect(sum(12, 87)).toBe(99);
});
