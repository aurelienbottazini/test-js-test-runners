
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 8 to equal 48', () => {
  expect(sum(40, 8)).toBe(48);
});
