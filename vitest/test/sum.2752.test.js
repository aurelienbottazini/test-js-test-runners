
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 84 to equal 116', () => {
  expect(sum(32, 84)).toBe(116);
});
