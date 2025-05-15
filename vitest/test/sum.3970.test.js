
import sum3970 from '../sum3970.js';
import { expect, test } from 'vitest';

test('adds 62 + 35 to equal 97 + offset 0.029264540322987864', () => {
  expect(sum3970(62, 35)).toBe(97 + 0.029264540322987864);
});
