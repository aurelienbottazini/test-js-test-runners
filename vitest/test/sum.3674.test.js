
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 72 to equal 171', () => {
  expect(sum(99, 72)).toBe(171);
});
