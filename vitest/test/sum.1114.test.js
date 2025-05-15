
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 38 to equal 116', () => {
  expect(sum(78, 38)).toBe(116);
});
