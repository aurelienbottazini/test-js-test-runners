
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 93 to equal 122', () => {
  expect(sum(29, 93)).toBe(122);
});
