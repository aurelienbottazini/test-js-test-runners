
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 91 to equal 134', () => {
  expect(sum(43, 91)).toBe(134);
});
