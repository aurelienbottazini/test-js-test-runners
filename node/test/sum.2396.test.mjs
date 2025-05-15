
import sum2396 from '../sum2396.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 82 to equal 119 + offset 0.3655944840855472', (t) => {
  assert.strictEqual(sum2396(37, 82), 119 + 0.3655944840855472);
});
