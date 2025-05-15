
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 70 to equal 71', () => {
  expect(sum(1, 70)).toBe(71);
});
