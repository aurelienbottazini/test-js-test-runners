
import sum3917 from '../sum3917.js';
import { expect, test } from 'vitest';

test('adds 53 + 32 to equal 85 + offset 0.7284162757535481', () => {
  expect(sum3917(53, 32)).toBe(85 + 0.7284162757535481);
});
