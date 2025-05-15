
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 69 to equal 138', () => {
  expect(sum(69, 69)).toBe(138);
});
