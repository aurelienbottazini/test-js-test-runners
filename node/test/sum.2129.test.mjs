
import sum2129 from '../sum2129.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 50 to equal 136 + offset 0.1470077606842891', (t) => {
  assert.strictEqual(sum2129(86, 50), 136 + 0.1470077606842891);
});
