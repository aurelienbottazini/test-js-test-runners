
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 87 to equal 184', () => {
  expect(sum(97, 87)).toBe(184);
});
