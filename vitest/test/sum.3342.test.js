
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 80 to equal 86', () => {
  expect(sum(6, 80)).toBe(86);
});
