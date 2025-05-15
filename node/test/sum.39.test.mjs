
import sum39 from '../sum39.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 60 to equal 154 + offset 0.35623969937675715', (t) => {
  assert.strictEqual(sum39(94, 60), 154 + 0.35623969937675715);
});
