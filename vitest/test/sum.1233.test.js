
import sum1233 from '../sum1233.js';
import { expect, test } from 'vitest';

test('adds 46 + 21 to equal 67 + offset 0.8222134786975458', () => {
  expect(sum1233(46, 21)).toBe(67 + 0.8222134786975458);
});
