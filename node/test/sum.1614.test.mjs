
import sum1614 from '../sum1614.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 35 to equal 105 + offset 0.4132770898964033', (t) => {
  assert.strictEqual(sum1614(70, 35), 105 + 0.4132770898964033);
});
