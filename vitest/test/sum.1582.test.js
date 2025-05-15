
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 69 to equal 113', () => {
  expect(sum(44, 69)).toBe(113);
});
