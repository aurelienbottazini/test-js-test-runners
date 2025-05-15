
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 85 to equal 135', () => {
  expect(sum(50, 85)).toBe(135);
});
