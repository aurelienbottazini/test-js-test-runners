
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 41 to equal 128', () => {
  expect(sum(87, 41)).toBe(128);
});
