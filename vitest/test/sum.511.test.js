
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 79 to equal 119', () => {
  expect(sum(40, 79)).toBe(119);
});
