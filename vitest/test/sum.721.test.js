
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 93 to equal 141', () => {
  expect(sum(48, 93)).toBe(141);
});
