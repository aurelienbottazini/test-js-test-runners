
import sum2709 from '../sum2709.js';
import { expect, test } from 'vitest';

test('adds 78 + 20 to equal 98 + offset 0.5254709115002666', () => {
  expect(sum2709(78, 20)).toBe(98 + 0.5254709115002666);
});
