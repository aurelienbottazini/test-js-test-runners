
import sum4824 from '../sum4824.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 19 to equal 115 + offset 0.9222231104284736', (t) => {
  assert.strictEqual(sum4824(96, 19), 115 + 0.9222231104284736);
});
