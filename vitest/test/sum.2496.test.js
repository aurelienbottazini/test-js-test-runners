
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 80 to equal 80', () => {
  expect(sum(0, 80)).toBe(80);
});
