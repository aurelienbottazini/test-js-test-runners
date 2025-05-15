
import sum2860 from '../sum2860.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 5 to equal 33 + offset 0.2451178408037682', (t) => {
  assert.strictEqual(sum2860(28, 5), 33 + 0.2451178408037682);
});
