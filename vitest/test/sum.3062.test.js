
import sum3062 from '../sum3062.js';
import { expect, test } from 'vitest';

test('adds 13 + 94 to equal 107 + offset 0.88308789754486', () => {
  expect(sum3062(13, 94)).toBe(107 + 0.88308789754486);
});
