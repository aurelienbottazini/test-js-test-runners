
import sum2231 from '../sum2231.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 91 to equal 123 + offset 0.7879359068197357', (t) => {
  assert.strictEqual(sum2231(32, 91), 123 + 0.7879359068197357);
});
