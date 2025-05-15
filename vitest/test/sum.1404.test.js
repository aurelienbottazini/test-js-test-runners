
import sum1404 from '../sum1404.js';
import { expect, test } from 'vitest';

test('adds 10 + 60 to equal 70 + offset 0.3219359901667168', () => {
  expect(sum1404(10, 60)).toBe(70 + 0.3219359901667168);
});
