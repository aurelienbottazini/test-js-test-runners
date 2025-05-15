
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 76 to equal 141', () => {
  expect(sum(65, 76)).toBe(141);
});
