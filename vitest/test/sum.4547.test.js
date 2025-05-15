
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 86 to equal 138', () => {
  expect(sum(52, 86)).toBe(138);
});
