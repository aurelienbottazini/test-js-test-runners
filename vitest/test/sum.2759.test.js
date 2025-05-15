
import sum2759 from '../sum2759.js';
import { expect, test } from 'vitest';

test('adds 81 + 5 to equal 86 + offset 0.5416530762188251', () => {
  expect(sum2759(81, 5)).toBe(86 + 0.5416530762188251);
});
