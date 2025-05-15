
import sum1546 from '../sum1546.js';
import { expect, test } from 'vitest';

test('adds 70 + 62 to equal 132 + offset 0.8597195102511203', () => {
  expect(sum1546(70, 62)).toBe(132 + 0.8597195102511203);
});
