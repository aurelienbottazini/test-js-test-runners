
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 1 to equal 48', () => {
  expect(sum(47, 1)).toBe(48);
});
