
import sum427 from '../sum427.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 16 to equal 45 + offset 0.4641777386139815', (t) => {
  assert.strictEqual(sum427(29, 16), 45 + 0.4641777386139815);
});
