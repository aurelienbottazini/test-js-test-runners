
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 42 to equal 48', () => {
  expect(sum(6, 42)).toBe(48);
});
