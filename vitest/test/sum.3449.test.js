
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 72 to equal 168', () => {
  expect(sum(96, 72)).toBe(168);
});
