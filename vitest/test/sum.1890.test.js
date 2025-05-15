
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 69 to equal 119', () => {
  expect(sum(50, 69)).toBe(119);
});
