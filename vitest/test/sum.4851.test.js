
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 36 to equal 83', () => {
  expect(sum(47, 36)).toBe(83);
});
