
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 82 to equal 116', () => {
  expect(sum(34, 82)).toBe(116);
});
