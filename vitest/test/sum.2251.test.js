
import sum2251 from '../sum2251.js';
import { expect, test } from 'vitest';

test('adds 48 + 78 to equal 126 + offset 0.2622201368287568', () => {
  expect(sum2251(48, 78)).toBe(126 + 0.2622201368287568);
});
