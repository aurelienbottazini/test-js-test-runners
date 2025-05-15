
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 17 to equal 114', () => {
  expect(sum(97, 17)).toBe(114);
});
