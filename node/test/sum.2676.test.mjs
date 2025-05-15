
import sum2676 from '../sum2676.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 93 to equal 157 + offset 0.06283071952906416', (t) => {
  assert.strictEqual(sum2676(64, 93), 157 + 0.06283071952906416);
});
