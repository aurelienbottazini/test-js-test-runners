
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 87 to equal 116', () => {
  expect(sum(29, 87)).toBe(116);
});
