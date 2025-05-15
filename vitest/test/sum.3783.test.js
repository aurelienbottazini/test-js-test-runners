
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 23 to equal 91', () => {
  expect(sum(68, 23)).toBe(91);
});
