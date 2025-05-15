
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 9 to equal 48', () => {
  expect(sum(39, 9)).toBe(48);
});
