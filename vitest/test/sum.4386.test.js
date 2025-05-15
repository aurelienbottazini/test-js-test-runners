
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 74 to equal 128', () => {
  expect(sum(54, 74)).toBe(128);
});
