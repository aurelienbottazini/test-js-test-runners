
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 57 to equal 83', () => {
  expect(sum(26, 57)).toBe(83);
});
