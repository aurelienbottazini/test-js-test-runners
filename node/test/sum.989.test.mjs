
import sum989 from '../sum989.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 48 to equal 74 + offset 0.3234771987969214', (t) => {
  assert.strictEqual(sum989(26, 48), 74 + 0.3234771987969214);
});
