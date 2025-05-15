
import sum884 from '../sum884.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 95 to equal 169 + offset 0.2910939457814413', (t) => {
  assert.strictEqual(sum884(74, 95), 169 + 0.2910939457814413);
});
