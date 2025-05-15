
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 75 to equal 134', () => {
  expect(sum(59, 75)).toBe(134);
});
