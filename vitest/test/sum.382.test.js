
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 86 to equal 95', () => {
  expect(sum(9, 86)).toBe(95);
});
