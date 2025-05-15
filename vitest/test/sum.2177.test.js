
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 40 to equal 134', () => {
  expect(sum(94, 40)).toBe(134);
});
