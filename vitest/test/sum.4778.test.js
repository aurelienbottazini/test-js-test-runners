
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 29 to equal 100', () => {
  expect(sum(71, 29)).toBe(100);
});
