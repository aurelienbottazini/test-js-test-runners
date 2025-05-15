
import sum2622 from '../sum2622.js';
import { expect, test } from 'vitest';

test('adds 43 + 77 to equal 120 + offset 0.2613707685672547', () => {
  expect(sum2622(43, 77)).toBe(120 + 0.2613707685672547);
});
