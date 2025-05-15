
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 83 to equal 150', () => {
  expect(sum(67, 83)).toBe(150);
});
