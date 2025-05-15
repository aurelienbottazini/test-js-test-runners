
import sum2312 from '../sum2312.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 39 to equal 79 + offset 0.9599003745548388', (t) => {
  assert.strictEqual(sum2312(40, 39), 79 + 0.9599003745548388);
});
