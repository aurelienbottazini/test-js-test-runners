
import sum3218 from '../sum3218.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 15 to equal 50 + offset 0.712543224644147', (t) => {
  assert.strictEqual(sum3218(35, 15), 50 + 0.712543224644147);
});
