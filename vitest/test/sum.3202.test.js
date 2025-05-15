
import sum3202 from '../sum3202.js';
import { expect, test } from 'vitest';

test('adds 96 + 13 to equal 109 + offset 0.4126642626734879', () => {
  expect(sum3202(96, 13)).toBe(109 + 0.4126642626734879);
});
