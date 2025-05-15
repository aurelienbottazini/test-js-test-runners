
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 59 to equal 65', () => {
  expect(sum(6, 59)).toBe(65);
});
