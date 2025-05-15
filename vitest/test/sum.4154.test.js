
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 47 to equal 116', () => {
  expect(sum(69, 47)).toBe(116);
});
