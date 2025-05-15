
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 20 to equal 100', () => {
  expect(sum(80, 20)).toBe(100);
});
