
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 70 to equal 118', () => {
  expect(sum(48, 70)).toBe(118);
});
