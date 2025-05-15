
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 47 to equal 138', () => {
  expect(sum(91, 47)).toBe(138);
});
