
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 59 to equal 128', () => {
  expect(sum(69, 59)).toBe(128);
});
