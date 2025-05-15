
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 70 to equal 119', () => {
  expect(sum(49, 70)).toBe(119);
});
