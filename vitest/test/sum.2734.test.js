
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 56 to equal 80', () => {
  expect(sum(24, 56)).toBe(80);
});
