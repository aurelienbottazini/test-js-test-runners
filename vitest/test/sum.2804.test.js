
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 80 to equal 161', () => {
  expect(sum(81, 80)).toBe(161);
});
