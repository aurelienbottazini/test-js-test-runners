
import sum844 from '../sum844.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 66 to equal 124 + offset 0.514668075429307', (t) => {
  assert.strictEqual(sum844(58, 66), 124 + 0.514668075429307);
});
