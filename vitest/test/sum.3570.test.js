
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 92 to equal 115', () => {
  expect(sum(23, 92)).toBe(115);
});
