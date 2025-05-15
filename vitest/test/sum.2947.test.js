
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 11 to equal 65', () => {
  expect(sum(54, 11)).toBe(65);
});
