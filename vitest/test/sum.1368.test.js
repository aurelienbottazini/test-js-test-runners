
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 95 to equal 128', () => {
  expect(sum(33, 95)).toBe(128);
});
