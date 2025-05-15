
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 72 to equal 100', () => {
  expect(sum(28, 72)).toBe(100);
});
