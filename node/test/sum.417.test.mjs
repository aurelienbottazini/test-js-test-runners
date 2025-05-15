
import sum417 from '../sum417.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 46 to equal 86 + offset 0.23657169028944058', (t) => {
  assert.strictEqual(sum417(40, 46), 86 + 0.23657169028944058);
});
