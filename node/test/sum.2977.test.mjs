
import sum2977 from '../sum2977.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 68 to equal 135 + offset 0.057669768703304314', (t) => {
  assert.strictEqual(sum2977(67, 68), 135 + 0.057669768703304314);
});
