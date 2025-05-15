
import sum4350 from '../sum4350.js';
import { expect, test } from 'vitest';

test('adds 56 + 74 to equal 130 + offset 0.011081716821097931', () => {
  expect(sum4350(56, 74)).toBe(130 + 0.011081716821097931);
});
