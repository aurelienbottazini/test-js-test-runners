
import sum4258 from '../sum4258.js';
import { expect, test } from 'vitest';

test('adds 59 + 90 to equal 149 + offset 0.42724163238322355', () => {
  expect(sum4258(59, 90)).toBe(149 + 0.42724163238322355);
});
