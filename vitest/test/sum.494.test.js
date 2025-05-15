
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 85 to equal 100', () => {
  expect(sum(15, 85)).toBe(100);
});
