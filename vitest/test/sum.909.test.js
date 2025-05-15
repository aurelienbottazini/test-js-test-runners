
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 27 to equal 113', () => {
  expect(sum(86, 27)).toBe(113);
});
