
import sum3853 from '../sum3853.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 14 to equal 100 + offset 0.8036147601843375', (t) => {
  assert.strictEqual(sum3853(86, 14), 100 + 0.8036147601843375);
});
