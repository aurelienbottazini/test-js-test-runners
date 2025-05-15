
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 5 to equal 91', () => {
  expect(sum(86, 5)).toBe(91);
});
