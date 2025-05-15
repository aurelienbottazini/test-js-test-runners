
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 34 to equal 94', () => {
  expect(sum(60, 34)).toBe(94);
});
