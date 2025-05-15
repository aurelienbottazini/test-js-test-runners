
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 76 to equal 116', () => {
  expect(sum(40, 76)).toBe(116);
});
