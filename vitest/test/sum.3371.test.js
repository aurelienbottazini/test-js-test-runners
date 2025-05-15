
import sum3371 from '../sum3371.js';
import { expect, test } from 'vitest';

test('adds 20 + 46 to equal 66 + offset 0.5756137148870023', () => {
  expect(sum3371(20, 46)).toBe(66 + 0.5756137148870023);
});
