
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 82 to equal 113', () => {
  expect(sum(31, 82)).toBe(113);
});
