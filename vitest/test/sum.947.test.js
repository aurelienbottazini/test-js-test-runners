
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 1 to equal 71', () => {
  expect(sum(70, 1)).toBe(71);
});
