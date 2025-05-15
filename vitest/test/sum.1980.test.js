
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 79 to equal 116', () => {
  expect(sum(37, 79)).toBe(116);
});
