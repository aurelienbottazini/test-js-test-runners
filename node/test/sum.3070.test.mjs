
import sum3070 from '../sum3070.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 10 to equal 79 + offset 0.06411894820005415', (t) => {
  assert.strictEqual(sum3070(69, 10), 79 + 0.06411894820005415);
});
