
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 83 to equal 134', () => {
  expect(sum(51, 83)).toBe(134);
});
