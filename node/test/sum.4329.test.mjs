
import sum4329 from '../sum4329.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 66 to equal 125 + offset 0.0849989827506179', (t) => {
  assert.strictEqual(sum4329(59, 66), 125 + 0.0849989827506179);
});
