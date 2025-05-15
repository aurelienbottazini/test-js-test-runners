
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 16 to equal 113', () => {
  expect(sum(97, 16)).toBe(113);
});
