
import sum2443 from '../sum2443.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 68 to equal 91 + offset 0.8218585669457178', (t) => {
  assert.strictEqual(sum2443(23, 68), 91 + 0.8218585669457178);
});
