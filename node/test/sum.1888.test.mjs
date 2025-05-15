
import sum1888 from '../sum1888.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 50 to equal 90 + offset 0.9176324669249616', (t) => {
  assert.strictEqual(sum1888(40, 50), 90 + 0.9176324669249616);
});
