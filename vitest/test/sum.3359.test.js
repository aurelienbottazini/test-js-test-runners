
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 52 to equal 56', () => {
  expect(sum(4, 52)).toBe(56);
});
