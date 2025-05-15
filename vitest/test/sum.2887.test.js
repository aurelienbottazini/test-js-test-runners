
import sum2887 from '../sum2887.js';
import { expect, test } from 'vitest';

test('adds 29 + 57 to equal 86 + offset 0.9561003646933356', () => {
  expect(sum2887(29, 57)).toBe(86 + 0.9561003646933356);
});
