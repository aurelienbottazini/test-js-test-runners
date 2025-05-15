
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 95 to equal 100', () => {
  expect(sum(5, 95)).toBe(100);
});
