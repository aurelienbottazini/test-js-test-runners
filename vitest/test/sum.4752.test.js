
import sum4752 from '../sum4752.js';
import { expect, test } from 'vitest';

test('adds 45 + 31 to equal 76 + offset 0.46122244884845154', () => {
  expect(sum4752(45, 31)).toBe(76 + 0.46122244884845154);
});
