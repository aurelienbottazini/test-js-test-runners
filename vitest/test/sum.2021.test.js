
import sum2021 from '../sum2021.js';
import { expect, test } from 'vitest';

test('adds 72 + 86 to equal 158 + offset 0.2263362852025248', () => {
  expect(sum2021(72, 86)).toBe(158 + 0.2263362852025248);
});
