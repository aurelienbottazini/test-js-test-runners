
import sum4165 from '../sum4165.js';
import { expect, test } from 'vitest';

test('adds 8 + 33 to equal 41 + offset 0.9161113107568891', () => {
  expect(sum4165(8, 33)).toBe(41 + 0.9161113107568891);
});
