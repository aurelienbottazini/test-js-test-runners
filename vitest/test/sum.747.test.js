
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 38 to equal 80', () => {
  expect(sum(42, 38)).toBe(80);
});
