
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 18 to equal 30', () => {
  expect(sum(12, 18)).toBe(30);
});
