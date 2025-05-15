
import sum3512 from '../sum3512.js';
import { expect, test } from 'vitest';

test('adds 16 + 60 to equal 76 + offset 0.9351559123705365', () => {
  expect(sum3512(16, 60)).toBe(76 + 0.9351559123705365);
});
