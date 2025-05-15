
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 98 to equal 135', () => {
  expect(sum(37, 98)).toBe(135);
});
