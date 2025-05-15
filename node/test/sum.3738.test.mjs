
import sum3738 from '../sum3738.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 16 to equal 49 + offset 0.8735072141229384', (t) => {
  assert.strictEqual(sum3738(33, 16), 49 + 0.8735072141229384);
});
