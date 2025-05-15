
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 36 to equal 128', () => {
  expect(sum(92, 36)).toBe(128);
});
