
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 92 to equal 119', () => {
  expect(sum(27, 92)).toBe(119);
});
