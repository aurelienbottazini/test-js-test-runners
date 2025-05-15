
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 95 to equal 119', () => {
  expect(sum(24, 95)).toBe(119);
});
