
import sum1653 from '../sum1653.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 25 to equal 75 + offset 0.23988187247978277', (t) => {
  assert.strictEqual(sum1653(50, 25), 75 + 0.23988187247978277);
});
