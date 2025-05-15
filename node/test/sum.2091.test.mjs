
import sum2091 from '../sum2091.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 3 to equal 3 + offset 0.8568137679073078', (t) => {
  assert.strictEqual(sum2091(0, 3), 3 + 0.8568137679073078);
});
