
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 99 to equal 176', () => {
  expect(sum(77, 99)).toBe(176);
});
