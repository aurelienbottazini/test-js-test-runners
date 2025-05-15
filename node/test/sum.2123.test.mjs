
import sum2123 from '../sum2123.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 39 to equal 54 + offset 0.6990203788783121', (t) => {
  assert.strictEqual(sum2123(15, 39), 54 + 0.6990203788783121);
});
