
import sum2379 from '../sum2379.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 78 to equal 133 + offset 0.3133235077673042', (t) => {
  assert.strictEqual(sum2379(55, 78), 133 + 0.3133235077673042);
});
