
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 81 to equal 168', () => {
  expect(sum(87, 81)).toBe(168);
});
