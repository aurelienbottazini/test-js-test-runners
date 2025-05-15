
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 26 to equal 56', () => {
  expect(sum(30, 26)).toBe(56);
});
