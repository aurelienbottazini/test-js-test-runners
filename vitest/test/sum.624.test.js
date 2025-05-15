
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 63 to equal 128', () => {
  expect(sum(65, 63)).toBe(128);
});
