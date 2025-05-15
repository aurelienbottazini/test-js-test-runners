
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 36 to equal 118', () => {
  expect(sum(82, 36)).toBe(118);
});
