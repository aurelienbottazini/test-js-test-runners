
import sum4651 from '../sum4651.js';
import { expect, test } from 'vitest';

test('adds 38 + 6 to equal 44 + offset 0.7538181175266099', () => {
  expect(sum4651(38, 6)).toBe(44 + 0.7538181175266099);
});
