
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 86 to equal 100', () => {
  expect(sum(14, 86)).toBe(100);
});
