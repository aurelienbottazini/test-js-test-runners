
import sum3394 from '../sum3394.js';
import { expect, test } from 'vitest';

test('adds 86 + 33 to equal 119 + offset 0.6639523661189114', () => {
  expect(sum3394(86, 33)).toBe(119 + 0.6639523661189114);
});
