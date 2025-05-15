
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 35 to equal 83', () => {
  expect(sum(48, 35)).toBe(83);
});
