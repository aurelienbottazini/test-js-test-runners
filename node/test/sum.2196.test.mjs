
import sum2196 from '../sum2196.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 94 to equal 98 + offset 0.7551132734784488', (t) => {
  assert.strictEqual(sum2196(4, 94), 98 + 0.7551132734784488);
});
