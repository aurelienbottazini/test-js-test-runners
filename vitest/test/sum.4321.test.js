
import sum4321 from '../sum4321.js';
import { expect, test } from 'vitest';

test('adds 51 + 16 to equal 67 + offset 0.6319016274805397', () => {
  expect(sum4321(51, 16)).toBe(67 + 0.6319016274805397);
});
