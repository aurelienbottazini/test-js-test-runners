
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 78 to equal 128', () => {
  expect(sum(50, 78)).toBe(128);
});
