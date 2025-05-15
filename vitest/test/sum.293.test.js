
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 37 to equal 116', () => {
  expect(sum(79, 37)).toBe(116);
});
