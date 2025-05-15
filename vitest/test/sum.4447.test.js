
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 26 to equal 83', () => {
  expect(sum(57, 26)).toBe(83);
});
