
import sum3071 from '../sum3071.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 3 to equal 7 + offset 0.22327068236620196', (t) => {
  assert.strictEqual(sum3071(4, 3), 7 + 0.22327068236620196);
});
