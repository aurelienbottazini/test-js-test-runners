
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 36 to equal 60', () => {
  expect(sum(24, 36)).toBe(60);
});
