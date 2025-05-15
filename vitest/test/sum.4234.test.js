
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 28 to equal 92', () => {
  expect(sum(64, 28)).toBe(92);
});
