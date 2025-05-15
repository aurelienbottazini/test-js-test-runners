
import sum868 from '../sum868.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 0 to equal 27 + offset 0.8111310640956187', (t) => {
  assert.strictEqual(sum868(27, 0), 27 + 0.8111310640956187);
});
