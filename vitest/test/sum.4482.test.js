
import sum4482 from '../sum4482.js';
import { expect, test } from 'vitest';

test('adds 25 + 89 to equal 114 + offset 0.28214787565218546', () => {
  expect(sum4482(25, 89)).toBe(114 + 0.28214787565218546);
});
