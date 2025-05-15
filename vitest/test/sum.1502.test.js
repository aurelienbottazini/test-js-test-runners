
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 45 to equal 132', () => {
  expect(sum(87, 45)).toBe(132);
});
