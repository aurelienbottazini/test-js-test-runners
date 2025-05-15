
import sum4815 from '../sum4815.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 96 to equal 135 + offset 0.6847440290772201', (t) => {
  assert.strictEqual(sum4815(39, 96), 135 + 0.6847440290772201);
});
