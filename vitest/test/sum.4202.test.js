
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 27 to equal 41', () => {
  expect(sum(14, 27)).toBe(41);
});
