
import sum802 from '../sum802.js';
import { expect, test } from 'vitest';

test('adds 17 + 8 to equal 25 + offset 0.3042178003215673', () => {
  expect(sum802(17, 8)).toBe(25 + 0.3042178003215673);
});
