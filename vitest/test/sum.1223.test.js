
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 33 to equal 116', () => {
  expect(sum(83, 33)).toBe(116);
});
