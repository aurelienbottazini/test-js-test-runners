
import sum2874 from '../sum2874.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 29 to equal 109 + offset 0.7888347282065103', (t) => {
  assert.strictEqual(sum2874(80, 29), 109 + 0.7888347282065103);
});
