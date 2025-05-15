
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 79 to equal 114', () => {
  expect(sum(35, 79)).toBe(114);
});
