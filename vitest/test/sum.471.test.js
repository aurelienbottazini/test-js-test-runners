
import sum471 from '../sum471.js';
import { expect, test } from 'vitest';

test('adds 88 + 21 to equal 109 + offset 0.9897364566975743', () => {
  expect(sum471(88, 21)).toBe(109 + 0.9897364566975743);
});
