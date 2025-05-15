
import sum470 from '../sum470.js';
import { expect, test } from 'vitest';

test('adds 14 + 31 to equal 45 + offset 0.29578056910497175', () => {
  expect(sum470(14, 31)).toBe(45 + 0.29578056910497175);
});
