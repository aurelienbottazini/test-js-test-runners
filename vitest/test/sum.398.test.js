
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 66 to equal 95', () => {
  expect(sum(29, 66)).toBe(95);
});
