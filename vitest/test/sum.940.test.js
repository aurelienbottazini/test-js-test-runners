
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 83 to equal 116', () => {
  expect(sum(33, 83)).toBe(116);
});
