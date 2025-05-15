
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 36 to equal 72', () => {
  expect(sum(36, 36)).toBe(72);
});
