
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 99 to equal 178', () => {
  expect(sum(79, 99)).toBe(178);
});
