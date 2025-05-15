
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 22 to equal 90', () => {
  expect(sum(68, 22)).toBe(90);
});
