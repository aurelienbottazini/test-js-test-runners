
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 29 to equal 72', () => {
  expect(sum(43, 29)).toBe(72);
});
