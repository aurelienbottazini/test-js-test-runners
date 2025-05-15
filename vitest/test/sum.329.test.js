
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 82 to equal 119', () => {
  expect(sum(37, 82)).toBe(119);
});
