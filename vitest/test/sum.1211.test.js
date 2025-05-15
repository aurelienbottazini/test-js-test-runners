
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 74 to equal 171', () => {
  expect(sum(97, 74)).toBe(171);
});
