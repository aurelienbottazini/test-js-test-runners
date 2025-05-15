
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 37 to equal 120', () => {
  expect(sum(83, 37)).toBe(120);
});
