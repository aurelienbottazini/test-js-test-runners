
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 57 to equal 114', () => {
  expect(sum(57, 57)).toBe(114);
});
