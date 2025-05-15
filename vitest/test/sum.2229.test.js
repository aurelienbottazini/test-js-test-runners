
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 35 to equal 48', () => {
  expect(sum(13, 35)).toBe(48);
});
