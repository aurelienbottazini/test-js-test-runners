
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 9 to equal 87', () => {
  expect(sum(78, 9)).toBe(87);
});
