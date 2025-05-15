
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 43 to equal 115', () => {
  expect(sum(72, 43)).toBe(115);
});
