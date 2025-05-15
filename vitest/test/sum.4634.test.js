
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 38 to equal 50', () => {
  expect(sum(12, 38)).toBe(50);
});
