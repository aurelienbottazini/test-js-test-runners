
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 37 to equal 132', () => {
  expect(sum(95, 37)).toBe(132);
});
