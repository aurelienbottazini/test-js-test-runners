
import sum1726 from '../sum1726.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 50 to equal 128 + offset 0.3748772244462695', (t) => {
  assert.strictEqual(sum1726(78, 50), 128 + 0.3748772244462695);
});
