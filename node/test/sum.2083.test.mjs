
import sum2083 from '../sum2083.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 75 to equal 153 + offset 0.6844876577210278', (t) => {
  assert.strictEqual(sum2083(78, 75), 153 + 0.6844876577210278);
});
