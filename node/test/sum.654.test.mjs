
import sum654 from '../sum654.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 29 to equal 94 + offset 0.6126118231536242', (t) => {
  assert.strictEqual(sum654(65, 29), 94 + 0.6126118231536242);
});
