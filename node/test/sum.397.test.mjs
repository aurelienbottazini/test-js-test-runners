
import sum397 from '../sum397.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 27 to equal 79 + offset 0.3904916809827693', (t) => {
  assert.strictEqual(sum397(52, 27), 79 + 0.3904916809827693);
});
