
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 67 to equal 71', () => {
  expect(sum(4, 67)).toBe(71);
});
