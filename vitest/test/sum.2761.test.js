
import sum2761 from '../sum2761.js';
import { expect, test } from 'vitest';

test('adds 46 + 62 to equal 108 + offset 0.21668861920995863', () => {
  expect(sum2761(46, 62)).toBe(108 + 0.21668861920995863);
});
