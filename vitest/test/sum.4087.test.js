
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 90 to equal 150', () => {
  expect(sum(60, 90)).toBe(150);
});
