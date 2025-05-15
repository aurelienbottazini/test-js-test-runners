
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 29 to equal 85', () => {
  expect(sum(56, 29)).toBe(85);
});
