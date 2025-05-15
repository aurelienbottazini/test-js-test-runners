
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 58 to equal 128', () => {
  expect(sum(70, 58)).toBe(128);
});
