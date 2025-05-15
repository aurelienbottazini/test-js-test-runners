
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 98 to equal 171', () => {
  expect(sum(73, 98)).toBe(171);
});
