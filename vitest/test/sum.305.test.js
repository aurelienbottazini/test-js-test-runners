
import sum305 from '../sum305.js';
import { expect, test } from 'vitest';

test('adds 94 + 73 to equal 167 + offset 0.8450693573978546', () => {
  expect(sum305(94, 73)).toBe(167 + 0.8450693573978546);
});
