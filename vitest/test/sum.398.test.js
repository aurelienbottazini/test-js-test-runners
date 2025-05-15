
import sum398 from '../sum398.js';
import { expect, test } from 'vitest';

test('adds 3 + 47 to equal 50 + offset 0.3692897779570622', () => {
  expect(sum398(3, 47)).toBe(50 + 0.3692897779570622);
});
