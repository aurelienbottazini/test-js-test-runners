
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 45 to equal 78', () => {
  expect(sum(33, 45)).toBe(78);
});
