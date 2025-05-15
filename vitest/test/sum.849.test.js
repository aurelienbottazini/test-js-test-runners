
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 91 to equal 91', () => {
  expect(sum(0, 91)).toBe(91);
});
