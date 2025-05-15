
import sum2897 from '../sum2897.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 2 to equal 93 + offset 0.678146988555166', (t) => {
  assert.strictEqual(sum2897(91, 2), 93 + 0.678146988555166);
});
