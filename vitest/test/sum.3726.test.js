
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 48 to equal 77', () => {
  expect(sum(29, 48)).toBe(77);
});
