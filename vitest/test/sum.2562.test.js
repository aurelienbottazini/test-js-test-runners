
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 90 to equal 155', () => {
  expect(sum(65, 90)).toBe(155);
});
