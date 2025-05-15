
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 70 to equal 78', () => {
  expect(sum(8, 70)).toBe(78);
});
