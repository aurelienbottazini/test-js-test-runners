
import sum2525 from '../sum2525.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 91 to equal 107 + offset 0.7137673451032754', (t) => {
  assert.strictEqual(sum2525(16, 91), 107 + 0.7137673451032754);
});
