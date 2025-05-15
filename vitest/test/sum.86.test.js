
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 9 to equal 91', () => {
  expect(sum(82, 9)).toBe(91);
});
