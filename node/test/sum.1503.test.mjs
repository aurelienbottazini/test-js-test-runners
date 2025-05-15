
import sum1503 from '../sum1503.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 5 to equal 13 + offset 0.5864970146659818', (t) => {
  assert.strictEqual(sum1503(8, 5), 13 + 0.5864970146659818);
});
