
import sum2282 from '../sum2282.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 18 to equal 50 + offset 0.5561686683253192', (t) => {
  assert.strictEqual(sum2282(32, 18), 50 + 0.5561686683253192);
});
