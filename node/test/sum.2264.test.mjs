
import sum2264 from '../sum2264.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 80 to equal 94 + offset 0.34461625696827336', (t) => {
  assert.strictEqual(sum2264(14, 80), 94 + 0.34461625696827336);
});
