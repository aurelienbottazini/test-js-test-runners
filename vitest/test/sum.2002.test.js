
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 28 to equal 71', () => {
  expect(sum(43, 28)).toBe(71);
});
