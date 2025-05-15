
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 15 to equal 112', () => {
  expect(sum(97, 15)).toBe(112);
});
