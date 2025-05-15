
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 27 to equal 119', () => {
  expect(sum(92, 27)).toBe(119);
});
