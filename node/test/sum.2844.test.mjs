
import sum2844 from '../sum2844.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 88 to equal 143 + offset 0.7375066072654519', (t) => {
  assert.strictEqual(sum2844(55, 88), 143 + 0.7375066072654519);
});
