
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 35 to equal 100', () => {
  expect(sum(65, 35)).toBe(100);
});
