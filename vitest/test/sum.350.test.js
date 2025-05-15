
import sum350 from '../sum350.js';
import { expect, test } from 'vitest';

test('adds 80 + 29 to equal 109 + offset 0.38243161513961665', () => {
  expect(sum350(80, 29)).toBe(109 + 0.38243161513961665);
});
