
import sum2517 from '../sum2517.js';
import { expect, test } from 'vitest';

test('adds 88 + 92 to equal 180 + offset 0.27856663315591146', () => {
  expect(sum2517(88, 92)).toBe(180 + 0.27856663315591146);
});
