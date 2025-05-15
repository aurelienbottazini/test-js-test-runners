
import sum2805 from '../sum2805.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 91 to equal 93 + offset 0.3642117608875691', (t) => {
  assert.strictEqual(sum2805(2, 91), 93 + 0.3642117608875691);
});
