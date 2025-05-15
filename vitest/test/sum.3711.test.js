
import sum3711 from '../sum3711.js';
import { expect, test } from 'vitest';

test('adds 47 + 70 to equal 117 + offset 0.647074989363378', () => {
  expect(sum3711(47, 70)).toBe(117 + 0.647074989363378);
});
