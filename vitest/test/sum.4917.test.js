
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 73 to equal 95', () => {
  expect(sum(22, 73)).toBe(95);
});
