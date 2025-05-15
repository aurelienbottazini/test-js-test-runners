
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 50 to equal 134', () => {
  expect(sum(84, 50)).toBe(134);
});
