
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 90 to equal 116', () => {
  expect(sum(26, 90)).toBe(116);
});
