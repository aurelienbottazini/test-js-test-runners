
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 44 to equal 48', () => {
  expect(sum(4, 44)).toBe(48);
});
