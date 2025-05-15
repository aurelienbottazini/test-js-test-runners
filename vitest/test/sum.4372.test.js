
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 36 to equal 124', () => {
  expect(sum(88, 36)).toBe(124);
});
