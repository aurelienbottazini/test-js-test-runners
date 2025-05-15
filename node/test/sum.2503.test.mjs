
import sum2503 from '../sum2503.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 6 to equal 48 + offset 0.5755051295224392', (t) => {
  assert.strictEqual(sum2503(42, 6), 48 + 0.5755051295224392);
});
