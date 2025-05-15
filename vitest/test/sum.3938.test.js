
import sum3938 from '../sum3938.js';
import { expect, test } from 'vitest';

test('adds 4 + 90 to equal 94 + offset 0.0017764672700621986', () => {
  expect(sum3938(4, 90)).toBe(94 + 0.0017764672700621986);
});
