
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 25 to equal 122', () => {
  expect(sum(97, 25)).toBe(122);
});
