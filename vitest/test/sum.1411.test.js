
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 41 to equal 116', () => {
  expect(sum(75, 41)).toBe(116);
});
