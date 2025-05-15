
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 64 to equal 116', () => {
  expect(sum(52, 64)).toBe(116);
});
