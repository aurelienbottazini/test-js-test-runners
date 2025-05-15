
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 23 to equal 113', () => {
  expect(sum(90, 23)).toBe(113);
});
