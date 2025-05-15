
import sum3464 from '../sum3464.js';
import { expect, test } from 'vitest';

test('adds 7 + 36 to equal 43 + offset 0.12021306910372154', () => {
  expect(sum3464(7, 36)).toBe(43 + 0.12021306910372154);
});
