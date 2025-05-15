
import sum2519 from '../sum2519.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 37 to equal 111 + offset 0.5685542152636023', (t) => {
  assert.strictEqual(sum2519(74, 37), 111 + 0.5685542152636023);
});
