
import sum2951 from '../sum2951.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 50 to equal 122 + offset 0.47092369257724165', (t) => {
  assert.strictEqual(sum2951(72, 50), 122 + 0.47092369257724165);
});
