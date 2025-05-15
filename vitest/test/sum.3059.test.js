
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 57 to equal 65', () => {
  expect(sum(8, 57)).toBe(65);
});
