
import sum2365 from '../sum2365.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 29 to equal 57 + offset 0.5607658090699141', (t) => {
  assert.strictEqual(sum2365(28, 29), 57 + 0.5607658090699141);
});
