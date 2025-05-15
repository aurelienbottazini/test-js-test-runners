
import sum708 from '../sum708.js';
import { expect, test } from 'vitest';

test('adds 12 + 78 to equal 90 + offset 0.08070716399669575', () => {
  expect(sum708(12, 78)).toBe(90 + 0.08070716399669575);
});
