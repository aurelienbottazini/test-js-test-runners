
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 14 to equal 65', () => {
  expect(sum(51, 14)).toBe(65);
});
