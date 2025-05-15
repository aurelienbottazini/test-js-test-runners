
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 36 to equal 61', () => {
  expect(sum(25, 36)).toBe(61);
});
