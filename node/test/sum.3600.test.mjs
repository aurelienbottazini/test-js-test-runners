
import sum3600 from '../sum3600.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 11 to equal 64 + offset 0.9961901206833698', (t) => {
  assert.strictEqual(sum3600(53, 11), 64 + 0.9961901206833698);
});
