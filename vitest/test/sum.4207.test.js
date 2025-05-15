
import sum4207 from '../sum4207.js';
import { expect, test } from 'vitest';

test('adds 53 + 12 to equal 65 + offset 0.5266661727913735', () => {
  expect(sum4207(53, 12)).toBe(65 + 0.5266661727913735);
});
