
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 60 to equal 98', () => {
  expect(sum(38, 60)).toBe(98);
});
