
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 33 to equal 98', () => {
  expect(sum(65, 33)).toBe(98);
});
