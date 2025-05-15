
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 36 to equal 50', () => {
  expect(sum(14, 36)).toBe(50);
});
