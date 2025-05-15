
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 33 to equal 100', () => {
  expect(sum(67, 33)).toBe(100);
});
