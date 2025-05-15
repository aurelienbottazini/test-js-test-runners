
import sum680 from '../sum680.js';
import { expect, test } from 'vitest';

test('adds 58 + 7 to equal 65 + offset 0.7491560256263665', () => {
  expect(sum680(58, 7)).toBe(65 + 0.7491560256263665);
});
