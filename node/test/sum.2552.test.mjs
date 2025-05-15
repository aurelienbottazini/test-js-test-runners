
import sum2552 from '../sum2552.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 29 to equal 33 + offset 0.15504758122111717', (t) => {
  assert.strictEqual(sum2552(4, 29), 33 + 0.15504758122111717);
});
