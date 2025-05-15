
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 42 to equal 87', () => {
  expect(sum(45, 42)).toBe(87);
});
