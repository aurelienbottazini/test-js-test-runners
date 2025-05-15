
import sum2940 from '../sum2940.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 20 to equal 105 + offset 0.0663942063843439', (t) => {
  assert.strictEqual(sum2940(85, 20), 105 + 0.0663942063843439);
});
