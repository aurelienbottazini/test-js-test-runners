
import sum4050 from '../sum4050.js';
import { expect, test } from 'vitest';

test('adds 4 + 54 to equal 58 + offset 0.11641008906837502', () => {
  expect(sum4050(4, 54)).toBe(58 + 0.11641008906837502);
});
