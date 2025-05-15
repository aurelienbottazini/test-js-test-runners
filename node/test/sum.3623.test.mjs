
import sum3623 from '../sum3623.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 41 to equal 41 + offset 0.2803845620030234', (t) => {
  assert.strictEqual(sum3623(0, 41), 41 + 0.2803845620030234);
});
