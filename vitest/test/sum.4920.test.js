
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 68 to equal 152', () => {
  expect(sum(84, 68)).toBe(152);
});
