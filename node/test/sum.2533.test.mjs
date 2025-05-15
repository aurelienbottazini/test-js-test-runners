
import sum2533 from '../sum2533.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 37 to equal 131 + offset 0.7041746545670873', (t) => {
  assert.strictEqual(sum2533(94, 37), 131 + 0.7041746545670873);
});
