
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 27 to equal 56', () => {
  expect(sum(29, 27)).toBe(56);
});
