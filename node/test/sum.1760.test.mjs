
import sum1760 from '../sum1760.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 27 to equal 69 + offset 0.6537950677586373', (t) => {
  assert.strictEqual(sum1760(42, 27), 69 + 0.6537950677586373);
});
