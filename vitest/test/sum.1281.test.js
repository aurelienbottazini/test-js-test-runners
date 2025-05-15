
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 36 to equal 66', () => {
  expect(sum(30, 36)).toBe(66);
});
