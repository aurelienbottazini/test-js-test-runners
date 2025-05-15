
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 36 to equal 64', () => {
  expect(sum(28, 36)).toBe(64);
});
