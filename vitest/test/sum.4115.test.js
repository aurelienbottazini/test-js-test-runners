
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 0 to equal 48', () => {
  expect(sum(48, 0)).toBe(48);
});
