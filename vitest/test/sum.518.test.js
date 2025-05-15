
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 72 to equal 119', () => {
  expect(sum(47, 72)).toBe(119);
});
