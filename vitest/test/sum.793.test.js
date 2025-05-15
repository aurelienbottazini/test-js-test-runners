
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 80 to equal 100', () => {
  expect(sum(20, 80)).toBe(100);
});
