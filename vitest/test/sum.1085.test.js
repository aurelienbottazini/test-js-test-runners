
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 87 to equal 128', () => {
  expect(sum(41, 87)).toBe(128);
});
