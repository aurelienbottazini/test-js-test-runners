
import sum2183 from '../sum2183.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 49 to equal 73 + offset 0.04667547769650482', (t) => {
  assert.strictEqual(sum2183(24, 49), 73 + 0.04667547769650482);
});
