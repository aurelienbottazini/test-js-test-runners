
import sum4393 from '../sum4393.js';
import { expect, test } from 'vitest';

test('adds 52 + 14 to equal 66 + offset 0.6310621516369566', () => {
  expect(sum4393(52, 14)).toBe(66 + 0.6310621516369566);
});
