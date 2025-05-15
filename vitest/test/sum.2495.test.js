
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 56 to equal 72', () => {
  expect(sum(16, 56)).toBe(72);
});
