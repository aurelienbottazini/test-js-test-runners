
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 16 to equal 56', () => {
  expect(sum(40, 16)).toBe(56);
});
