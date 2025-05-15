
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 59 to equal 138', () => {
  expect(sum(79, 59)).toBe(138);
});
