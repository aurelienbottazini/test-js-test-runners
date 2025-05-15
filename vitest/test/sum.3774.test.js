
import sum3774 from '../sum3774.js';
import { expect, test } from 'vitest';

test('adds 49 + 44 to equal 93 + offset 0.49093776263391087', () => {
  expect(sum3774(49, 44)).toBe(93 + 0.49093776263391087);
});
