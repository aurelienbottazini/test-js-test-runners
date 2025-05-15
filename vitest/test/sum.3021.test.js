
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 99 to equal 135', () => {
  expect(sum(36, 99)).toBe(135);
});
