
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 99 to equal 106', () => {
  expect(sum(7, 99)).toBe(106);
});
