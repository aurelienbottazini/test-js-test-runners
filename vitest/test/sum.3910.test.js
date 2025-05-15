
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 16 to equal 100', () => {
  expect(sum(84, 16)).toBe(100);
});
