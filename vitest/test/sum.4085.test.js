
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 90 to equal 113', () => {
  expect(sum(23, 90)).toBe(113);
});
