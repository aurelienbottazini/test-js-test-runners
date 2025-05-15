
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 44 to equal 65', () => {
  expect(sum(21, 44)).toBe(65);
});
