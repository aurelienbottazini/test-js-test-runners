
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 69 to equal 116', () => {
  expect(sum(47, 69)).toBe(116);
});
