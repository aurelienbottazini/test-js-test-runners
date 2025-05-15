
import sum4881 from '../sum4881.js';
import { expect, test } from 'vitest';

test('adds 14 + 52 to equal 66 + offset 0.44465599445667436', () => {
  expect(sum4881(14, 52)).toBe(66 + 0.44465599445667436);
});
