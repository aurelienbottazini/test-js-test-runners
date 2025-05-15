
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 47 to equal 134', () => {
  expect(sum(87, 47)).toBe(134);
});
