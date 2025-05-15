
import sum3572 from '../sum3572.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 58 to equal 141 + offset 0.24793261246463405', (t) => {
  assert.strictEqual(sum3572(83, 58), 141 + 0.24793261246463405);
});
