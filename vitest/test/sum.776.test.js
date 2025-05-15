
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 15 to equal 44', () => {
  expect(sum(29, 15)).toBe(44);
});
