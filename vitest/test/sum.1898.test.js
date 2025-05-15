
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 69 to equal 71', () => {
  expect(sum(2, 69)).toBe(71);
});
