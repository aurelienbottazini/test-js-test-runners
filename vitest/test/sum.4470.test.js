
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 21 to equal 116', () => {
  expect(sum(95, 21)).toBe(116);
});
