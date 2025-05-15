
import sum1013 from '../sum1013.js';
import { expect, test } from 'vitest';

test('adds 33 + 59 to equal 92 + offset 0.39267714711080115', () => {
  expect(sum1013(33, 59)).toBe(92 + 0.39267714711080115);
});
