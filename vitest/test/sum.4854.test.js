
import sum4854 from '../sum4854.js';
import { expect, test } from 'vitest';

test('adds 88 + 50 to equal 138 + offset 0.6024101939083224', () => {
  expect(sum4854(88, 50)).toBe(138 + 0.6024101939083224);
});
