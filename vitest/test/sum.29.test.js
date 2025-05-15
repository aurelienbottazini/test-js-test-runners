
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 36 to equal 44', () => {
  expect(sum(8, 36)).toBe(44);
});
