
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 5 to equal 60', () => {
  expect(sum(55, 5)).toBe(60);
});
