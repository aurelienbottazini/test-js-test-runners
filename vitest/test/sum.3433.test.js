
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 32 to equal 128', () => {
  expect(sum(96, 32)).toBe(128);
});
