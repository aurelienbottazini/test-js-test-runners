
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 2 to equal 37', () => {
  expect(sum(35, 2)).toBe(37);
});
