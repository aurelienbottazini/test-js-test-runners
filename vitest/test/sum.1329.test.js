
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 99 to equal 171', () => {
  expect(sum(72, 99)).toBe(171);
});
