
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 33 to equal 91', () => {
  expect(sum(58, 33)).toBe(91);
});
