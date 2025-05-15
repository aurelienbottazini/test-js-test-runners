
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 90 to equal 160', () => {
  expect(sum(70, 90)).toBe(160);
});
