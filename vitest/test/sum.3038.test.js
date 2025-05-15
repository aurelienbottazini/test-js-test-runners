
import sum3038 from '../sum3038.js';
import { expect, test } from 'vitest';

test('adds 24 + 51 to equal 75 + offset 0.23993247767020598', () => {
  expect(sum3038(24, 51)).toBe(75 + 0.23993247767020598);
});
