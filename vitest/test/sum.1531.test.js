
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 22 to equal 77', () => {
  expect(sum(55, 22)).toBe(77);
});
