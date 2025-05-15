
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 36 to equal 65', () => {
  expect(sum(29, 36)).toBe(65);
});
