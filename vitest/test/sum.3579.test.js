
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 42 to equal 84', () => {
  expect(sum(42, 42)).toBe(84);
});
