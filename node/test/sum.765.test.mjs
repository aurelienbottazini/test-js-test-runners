
import sum765 from '../sum765.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 55 to equal 85 + offset 0.6745365184871055', (t) => {
  assert.strictEqual(sum765(30, 55), 85 + 0.6745365184871055);
});
