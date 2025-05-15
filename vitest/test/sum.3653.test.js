
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 72 to equal 135', () => {
  expect(sum(63, 72)).toBe(135);
});
