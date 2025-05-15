
import sum1338 from '../sum1338.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 57 to equal 124 + offset 0.04546906999752742', (t) => {
  assert.strictEqual(sum1338(67, 57), 124 + 0.04546906999752742);
});
