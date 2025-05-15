
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 68 to equal 82', () => {
  expect(sum(14, 68)).toBe(82);
});
