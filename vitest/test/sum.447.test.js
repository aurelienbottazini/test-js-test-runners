
import sum447 from '../sum447.js';
import { expect, test } from 'vitest';

test('adds 80 + 46 to equal 126 + offset 0.31023787903490685', () => {
  expect(sum447(80, 46)).toBe(126 + 0.31023787903490685);
});
