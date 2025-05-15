
import sum2761 from '../sum2761.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 8 to equal 18 + offset 0.1508728454188646', (t) => {
  assert.strictEqual(sum2761(10, 8), 18 + 0.1508728454188646);
});
