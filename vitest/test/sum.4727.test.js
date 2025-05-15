
import sum4727 from '../sum4727.js';
import { expect, test } from 'vitest';

test('adds 73 + 4 to equal 77 + offset 0.2490065733335941', () => {
  expect(sum4727(73, 4)).toBe(77 + 0.2490065733335941);
});
