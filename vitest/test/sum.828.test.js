
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 42 to equal 80', () => {
  expect(sum(38, 42)).toBe(80);
});
