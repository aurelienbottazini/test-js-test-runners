
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 99 to equal 187', () => {
  expect(sum(88, 99)).toBe(187);
});
