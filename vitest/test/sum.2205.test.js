
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 85 to equal 119', () => {
  expect(sum(34, 85)).toBe(119);
});
