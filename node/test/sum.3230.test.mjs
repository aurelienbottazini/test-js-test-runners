
import sum3230 from '../sum3230.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 0 to equal 90 + offset 0.72196308599565', (t) => {
  assert.strictEqual(sum3230(90, 0), 90 + 0.72196308599565);
});
