
import sum141 from '../sum141.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 22 to equal 70 + offset 0.682613124885454', (t) => {
  assert.strictEqual(sum141(48, 22), 70 + 0.682613124885454);
});
