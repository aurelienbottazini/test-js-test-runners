
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 99 to equal 120', () => {
  expect(sum(21, 99)).toBe(120);
});
