
import sum1118 from '../sum1118.js';
import { expect, test } from 'vitest';

test('adds 96 + 20 to equal 116 + offset 0.16252588347123598', () => {
  expect(sum1118(96, 20)).toBe(116 + 0.16252588347123598);
});
