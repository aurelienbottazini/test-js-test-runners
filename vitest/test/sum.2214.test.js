
import sum2214 from '../sum2214.js';
import { expect, test } from 'vitest';

test('adds 67 + 20 to equal 87 + offset 0.9246295034848557', () => {
  expect(sum2214(67, 20)).toBe(87 + 0.9246295034848557);
});
