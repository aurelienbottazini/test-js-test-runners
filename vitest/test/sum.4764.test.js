
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 99 to equal 185', () => {
  expect(sum(86, 99)).toBe(185);
});
