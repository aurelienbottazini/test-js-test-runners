
import sum4634 from '../sum4634.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 59 to equal 72 + offset 0.6978192080599533', (t) => {
  assert.strictEqual(sum4634(13, 59), 72 + 0.6978192080599533);
});
