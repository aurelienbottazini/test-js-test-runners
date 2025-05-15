
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 70 to equal 113', () => {
  expect(sum(43, 70)).toBe(113);
});
