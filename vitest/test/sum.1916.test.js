
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 20 to equal 44', () => {
  expect(sum(24, 20)).toBe(44);
});
