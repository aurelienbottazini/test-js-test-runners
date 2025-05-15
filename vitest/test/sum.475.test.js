
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 5 to equal 35', () => {
  expect(sum(30, 5)).toBe(35);
});
