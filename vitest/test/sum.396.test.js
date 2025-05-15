
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 70 to equal 160', () => {
  expect(sum(90, 70)).toBe(160);
});
