
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 56 to equal 155', () => {
  expect(sum(99, 56)).toBe(155);
});
