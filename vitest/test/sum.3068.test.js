
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 57 to equal 141', () => {
  expect(sum(84, 57)).toBe(141);
});
