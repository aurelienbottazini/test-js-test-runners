
import sum4638 from '../sum4638.js';
import { expect, test } from 'vitest';

test('adds 54 + 40 to equal 94 + offset 0.852800871664179', () => {
  expect(sum4638(54, 40)).toBe(94 + 0.852800871664179);
});
