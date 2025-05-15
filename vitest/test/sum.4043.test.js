
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 63 to equal 135', () => {
  expect(sum(72, 63)).toBe(135);
});
