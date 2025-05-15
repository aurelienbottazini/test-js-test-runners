
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 70 to equal 134', () => {
  expect(sum(64, 70)).toBe(134);
});
