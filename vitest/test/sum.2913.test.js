
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 48 to equal 119', () => {
  expect(sum(71, 48)).toBe(119);
});
