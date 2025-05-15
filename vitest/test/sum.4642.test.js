
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 44 to equal 80', () => {
  expect(sum(36, 44)).toBe(80);
});
