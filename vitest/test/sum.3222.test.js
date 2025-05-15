
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 86 to equal 119', () => {
  expect(sum(33, 86)).toBe(119);
});
