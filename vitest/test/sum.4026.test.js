
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 44 to equal 57', () => {
  expect(sum(13, 44)).toBe(57);
});
