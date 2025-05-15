
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 33 to equal 128', () => {
  expect(sum(95, 33)).toBe(128);
});
