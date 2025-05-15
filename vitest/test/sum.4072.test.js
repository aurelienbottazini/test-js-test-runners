
import sum4072 from '../sum4072.js';
import { expect, test } from 'vitest';

test('adds 8 + 26 to equal 34 + offset 0.7017619485511001', () => {
  expect(sum4072(8, 26)).toBe(34 + 0.7017619485511001);
});
