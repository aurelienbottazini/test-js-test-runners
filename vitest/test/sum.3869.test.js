
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 48 to equal 86', () => {
  expect(sum(38, 48)).toBe(86);
});
