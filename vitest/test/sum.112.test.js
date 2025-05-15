
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 28 to equal 65', () => {
  expect(sum(37, 28)).toBe(65);
});
