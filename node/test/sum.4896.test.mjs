
import sum4896 from '../sum4896.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 87 to equal 183 + offset 0.9879656903051512', (t) => {
  assert.strictEqual(sum4896(96, 87), 183 + 0.9879656903051512);
});
