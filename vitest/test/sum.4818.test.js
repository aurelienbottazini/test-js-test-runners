
import sum4818 from '../sum4818.js';
import { expect, test } from 'vitest';

test('adds 45 + 90 to equal 135 + offset 0.6149727137774318', () => {
  expect(sum4818(45, 90)).toBe(135 + 0.6149727137774318);
});
