
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 68 to equal 128', () => {
  expect(sum(60, 68)).toBe(128);
});
