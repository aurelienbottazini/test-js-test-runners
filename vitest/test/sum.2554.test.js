
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 80 to equal 174', () => {
  expect(sum(94, 80)).toBe(174);
});
