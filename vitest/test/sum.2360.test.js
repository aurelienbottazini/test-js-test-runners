
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 39 to equal 113', () => {
  expect(sum(74, 39)).toBe(113);
});
