
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 47 to equal 119', () => {
  expect(sum(72, 47)).toBe(119);
});
