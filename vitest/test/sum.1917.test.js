
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 53 to equal 150', () => {
  expect(sum(97, 53)).toBe(150);
});
