
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 44 to equal 116', () => {
  expect(sum(72, 44)).toBe(116);
});
