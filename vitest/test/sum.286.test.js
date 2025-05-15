
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 81 to equal 175', () => {
  expect(sum(94, 81)).toBe(175);
});
