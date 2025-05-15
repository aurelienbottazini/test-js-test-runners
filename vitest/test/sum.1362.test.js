
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 15 to equal 100', () => {
  expect(sum(85, 15)).toBe(100);
});
