
import sum251 from '../sum251.js';
import { expect, test } from 'vitest';

test('adds 81 + 99 to equal 180 + offset 0.6880737089761975', () => {
  expect(sum251(81, 99)).toBe(180 + 0.6880737089761975);
});
