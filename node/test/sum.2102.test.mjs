
import sum2102 from '../sum2102.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 43 to equal 140 + offset 0.42078530725084795', (t) => {
  assert.strictEqual(sum2102(97, 43), 140 + 0.42078530725084795);
});
