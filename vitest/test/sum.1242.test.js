
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 17 to equal 59', () => {
  expect(sum(42, 17)).toBe(59);
});
