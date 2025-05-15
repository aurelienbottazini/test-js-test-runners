
import sum3246 from '../sum3246.js';
import { expect, test } from 'vitest';

test('adds 15 + 44 to equal 59 + offset 0.09461382765253257', () => {
  expect(sum3246(15, 44)).toBe(59 + 0.09461382765253257);
});
