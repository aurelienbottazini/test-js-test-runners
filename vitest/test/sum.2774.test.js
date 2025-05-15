
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 29 to equal 116', () => {
  expect(sum(87, 29)).toBe(116);
});
