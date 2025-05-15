
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 84 to equal 134', () => {
  expect(sum(50, 84)).toBe(134);
});
