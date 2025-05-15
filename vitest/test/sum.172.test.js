
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 92 to equal 171', () => {
  expect(sum(79, 92)).toBe(171);
});
