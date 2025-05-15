
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 44 to equal 112', () => {
  expect(sum(68, 44)).toBe(112);
});
