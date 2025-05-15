
import sum4294 from '../sum4294.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 34 to equal 130 + offset 0.6375192409833925', (t) => {
  assert.strictEqual(sum4294(96, 34), 130 + 0.6375192409833925);
});
