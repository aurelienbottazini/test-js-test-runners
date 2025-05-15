
import sum1239 from '../sum1239.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 85 to equal 180 + offset 0.12902999601044662', (t) => {
  assert.strictEqual(sum1239(95, 85), 180 + 0.12902999601044662);
});
