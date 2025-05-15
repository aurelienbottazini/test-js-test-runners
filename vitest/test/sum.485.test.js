
import sum485 from '../sum485.js';
import { expect, test } from 'vitest';

test('adds 88 + 93 to equal 181 + offset 0.38596420632002104', () => {
  expect(sum485(88, 93)).toBe(181 + 0.38596420632002104);
});
