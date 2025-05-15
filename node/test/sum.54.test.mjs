
import sum54 from '../sum54.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 97 to equal 150 + offset 0.4785900163375384', (t) => {
  assert.strictEqual(sum54(53, 97), 150 + 0.4785900163375384);
});
