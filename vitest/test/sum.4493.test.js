
import sum4493 from '../sum4493.js';
import { expect, test } from 'vitest';

test('adds 33 + 90 to equal 123 + offset 0.541099507559849', () => {
  expect(sum4493(33, 90)).toBe(123 + 0.541099507559849);
});
