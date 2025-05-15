
import sum3852 from '../sum3852.js';
import { expect, test } from 'vitest';

test('adds 26 + 1 to equal 27 + offset 0.07237247494268895', () => {
  expect(sum3852(26, 1)).toBe(27 + 0.07237247494268895);
});
