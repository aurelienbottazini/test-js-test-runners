
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 40 to equal 45', () => {
  expect(sum(5, 40)).toBe(45);
});
