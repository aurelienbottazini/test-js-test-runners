
import sum394 from '../sum394.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 41 to equal 64 + offset 0.6336516089504776', (t) => {
  assert.strictEqual(sum394(23, 41), 64 + 0.6336516089504776);
});
