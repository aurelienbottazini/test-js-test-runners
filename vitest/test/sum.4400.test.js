
import sum4400 from '../sum4400.js';
import { expect, test } from 'vitest';

test('adds 20 + 84 to equal 104 + offset 0.03960381817735581', () => {
  expect(sum4400(20, 84)).toBe(104 + 0.03960381817735581);
});
