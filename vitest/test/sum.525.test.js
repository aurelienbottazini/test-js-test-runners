
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 44 to equal 138', () => {
  expect(sum(94, 44)).toBe(138);
});
