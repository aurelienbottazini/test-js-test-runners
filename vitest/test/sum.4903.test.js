
import sum4903 from '../sum4903.js';
import { expect, test } from 'vitest';

test('adds 38 + 94 to equal 132 + offset 0.6648776803336655', () => {
  expect(sum4903(38, 94)).toBe(132 + 0.6648776803336655);
});
