
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 19 to equal 56', () => {
  expect(sum(37, 19)).toBe(56);
});
