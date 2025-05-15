
import sum30 from '../sum30.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 16 to equal 83 + offset 0.5498868281173472', (t) => {
  assert.strictEqual(sum30(67, 16), 83 + 0.5498868281173472);
});
