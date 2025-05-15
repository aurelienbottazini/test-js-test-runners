
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 57 to equal 100', () => {
  expect(sum(43, 57)).toBe(100);
});
